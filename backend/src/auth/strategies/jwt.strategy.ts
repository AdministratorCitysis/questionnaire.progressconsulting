import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';

interface JwtPayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

export interface AuthenticatedAdmin {
  id: string;
  email: string;
  name: string | null;
  isActive: boolean;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret') as string,
    });
  }

  async validate(payload: JwtPayload): Promise<AuthenticatedAdmin> {
    const admin = await this.prisma.admin.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, name: true, isActive: true },
    });

    if (!admin || !admin.isActive) {
      throw new UnauthorizedException();
    }

    return admin;
  }
}
