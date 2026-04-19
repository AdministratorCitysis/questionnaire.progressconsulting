import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminService, AdminSummary } from './admin.service';
import { AuthenticatedAdmin } from '../auth/strategies/jwt.strategy';

interface RequestWithAdmin extends Request {
  user: AuthenticatedAdmin;
}

// All routes under /api/admin are protected by JWT.
// Add questionnaire management, publishing, etc. here in future phases.
@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('profile')
  getProfile(@Request() req: RequestWithAdmin): Promise<AdminSummary> {
    return this.adminService.findById(req.user.id);
  }
}
