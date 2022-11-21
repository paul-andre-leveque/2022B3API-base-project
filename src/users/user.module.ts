import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/services/auth.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './user.entity';


@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthService,JwtService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UsersService]
})
export class UserModule {}
