import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from './config/mongo.config';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'your-secret-key-here',
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forRootAsync({
      useFactory: () => mongoConfig,
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController, AppController, UsersController],
  providers: [AuthService, AppService, UsersService],
})
export class AppModule {}
