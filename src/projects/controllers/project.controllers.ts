import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateProjectDto } from '../model/dto/creat-project.dto';
import { ProjectService } from '../services/project.service';

@Controller('projects')
@UseInterceptors(ClassSerializerInterceptor)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() project: CreateProjectDto) {
    return this.projectService.createProject(project);
  }
}
