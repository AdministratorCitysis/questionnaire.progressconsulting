import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface AdminSummary {
  id: string;
  email: string;
  name: string | null;
  isActive: boolean;
  createdAt: Date;
}

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<AdminSummary> {
    const admin = await this.prisma.admin.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, isActive: true, createdAt: true },
    });

    if (!admin) {
      throw new NotFoundException('Admin introuvable.');
    }

    return admin;
  }
}
