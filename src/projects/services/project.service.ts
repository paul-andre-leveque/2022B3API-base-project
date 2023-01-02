import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../model/project.entity';
import { CreateProjectDto } from '../model/dto/creat-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  // Create a new project and save it to the database.
  async createProject(project: CreateProjectDto): Promise<Project> {
    const newProject = new Project();
    newProject.name = project.name;
    newProject.referringEmployeeId = project.referringEmployeeId;
    return this.projectRepository.save(newProject);
  }
}
