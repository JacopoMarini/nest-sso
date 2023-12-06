import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({ secret: '', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [AuthController, AppController],
  providers: [AuthService, AppService],
})
export class AppModule {}
