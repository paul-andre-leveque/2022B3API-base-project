import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './dto/user.entity';
import { Project } from '../projects/dto/project.entity';
import { AuthModule } from '../auth/auth.module';



@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([User,Project]), AuthModule],
  exports: [UsersService,TypeOrmModule]
})
export class UserModule {}
