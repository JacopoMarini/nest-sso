import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any): Promise<{ access_token: string }> {
    try {
      const authenticatedUser = await this.authService.validateUser(
        user.username,
        user.password,
      );

      if (!authenticatedUser) {
        throw new UnauthorizedException('Credenziali non valide');
      }

      return this.authService.login(authenticatedUser);
    } catch (error) {
      throw new HttpException(
        "Errore durante l'autenticazione",
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
