import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUser } from './model/project-user.entity';
import { Project } from '../projects/model/project.entity';
import { User } from '../users/model/user.entity';
import { ProjectUsersController } from './controllers/project-users.controller';
import { ProjectUsersService } from './services/project-users.service';
import { UsersService } from '../users/services/users.service';
import { ProjectService } from '../projects/services/project.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectUser, Project, User])],
  controllers: [ProjectUsersController],
  providers: [ProjectUsersService, ProjectService, UsersService],
})
export class ProjectUsersModule {}