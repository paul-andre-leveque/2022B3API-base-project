import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/model/user.entity';
import { Project } from './model/project.entity';
import { ProjectController } from './controllers/project.controllers';
import { ProjectService } from './services/project.service';
import { UserModule } from '../users/user.module';

// import { ProjectsUsersModule } from '../project-users/projects-users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project, User]), UserModule],
  exports: [TypeOrmModule, ProjectService],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
