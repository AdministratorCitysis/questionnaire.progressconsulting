import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const jwtSecret = configService.get<string>('jwt.secret');
  if (!jwtSecret) {
    throw new Error('JWT_SECRET environment variable must be set before starting the server.');
  }

  const port = configService.get<number>('app.port') ?? 3001;
  const corsOrigin = configService.get<string>('app.corsOrigin') ?? 'http://localhost:3000';

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(port);
  console.log(`[backend] API running on http://localhost:${port}/api`);
}

bootstrap();
