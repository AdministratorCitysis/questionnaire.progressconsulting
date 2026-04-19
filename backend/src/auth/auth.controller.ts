import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { Throttle, SkipThrottle } from '@nestjs/throttler';
import { AuthService, LoginResponse, AdminProfile } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthenticatedAdmin } from './strategies/jwt.strategy';

interface RequestWithAdmin extends Request {
  user: AuthenticatedAdmin;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 5 login attempts per minute per IP — brute-force protection.
  @Throttle({ default: { ttl: 60_000, limit: 5 } })
  @Post('login')
  login(@Body() dto: LoginDto): Promise<LoginResponse> {
    return this.authService.login(dto);
  }

  // /me is called often (route guard validation); skip the global rate limit.
  @SkipThrottle()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req: RequestWithAdmin): Promise<AdminProfile> {
    return this.authService.getProfile(req.user.id);
  }
}
