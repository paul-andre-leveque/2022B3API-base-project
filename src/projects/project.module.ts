import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/model/user.entity';
import { Project } from './model/project.entity';
import { ProjectController } from './controllers/project.controllers';
import { ProjectService } from './services/project.service';
import { ProjectUser } from '../project-users/model/project-user.entity';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { ProjectUsersService } from '../project-users/services/project-users.service';

// import { ProjectsUsersModule } from '../project-users/projects-users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project, User, ProjectUser])],
  exports: [TypeOrmModule, ProjectService],
  controllers: [ProjectController],
  providers: [ProjectService, UsersService, JwtService, JwtStrategy,ProjectUsersService],
})
export class ProjectModule {}
