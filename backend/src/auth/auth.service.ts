import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

export interface LoginResponse {
  access_token: string;
  admin: {
    id: string;
    email: string;
    name: string | null;
  };
}

export interface AdminProfile {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<LoginResponse> {
    const admin = await this.prisma.admin.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
    });

    // Identical error message for both "not found" and "wrong password"
    // to prevent user enumeration.
    const invalidError = new UnauthorizedException('Identifiants invalides.');

    if (!admin || !admin.isActive) {
      throw invalidError;
    }

    const passwordValid = await bcrypt.compare(dto.password, admin.passwordHash);
    if (!passwordValid) {
      throw invalidError;
    }

    const payload = { sub: admin.id, email: admin.email };
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
    };
  }

  async getProfile(adminId: string): Promise<AdminProfile> {
    const admin = await this.prisma.admin.findUnique({
      where: { id: adminId },
      select: { id: true, email: true, name: true, createdAt: true },
    });

    if (!admin) {
      throw new UnauthorizedException();
    }

    return admin;
  }
}
