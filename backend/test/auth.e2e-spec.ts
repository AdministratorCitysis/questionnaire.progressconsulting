import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

/**
 * E2E tests for authentication endpoints.
 *
 * Prerequisites: a running PostgreSQL instance configured via DATABASE_URL.
 * Run with: npm run test:e2e
 */
describe('Authentication (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // ─── POST /api/auth/login ────────────────────────────────────────────────

  describe('POST /api/auth/login', () => {
    it('returns 401 when credentials are wrong', () => {
      return request(app.getHttpServer())
        .post('/api/auth/login')
        .send({ email: 'wrong@example.com', password: 'wrongpassword' })
        .expect(401);
    });

    it('returns 400 when email is missing', () => {
      return request(app.getHttpServer())
        .post('/api/auth/login')
        .send({ password: 'somepassword' })
        .expect(400);
    });

    it('returns 400 when email is invalid', () => {
      return request(app.getHttpServer())
        .post('/api/auth/login')
        .send({ email: 'not-an-email', password: 'somepassword' })
        .expect(400);
    });

    it('returns 400 when password is missing', () => {
      return request(app.getHttpServer())
        .post('/api/auth/login')
        .send({ email: 'admin@progressconsulting.be' })
        .expect(400);
    });
  });

  // ─── GET /api/auth/me ────────────────────────────────────────────────────

  describe('GET /api/auth/me', () => {
    it('returns 401 without a token', () => {
      return request(app.getHttpServer()).get('/api/auth/me').expect(401);
    });

    it('returns 401 with a malformed token', () => {
      return request(app.getHttpServer())
        .get('/api/auth/me')
        .set('Authorization', 'Bearer invalid.token.here')
        .expect(401);
    });
  });

  // ─── GET /api/admin/profile ──────────────────────────────────────────────

  describe('GET /api/admin/profile', () => {
    it('returns 401 without a token', () => {
      return request(app.getHttpServer()).get('/api/admin/profile').expect(401);
    });
  });
});
