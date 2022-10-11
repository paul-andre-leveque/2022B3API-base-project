import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
//import { UsersController } from './users/controllers/users.controller';
import { User } from './user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  //controllers: [UsersController],
})
export class UsersModule {}
