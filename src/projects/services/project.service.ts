import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../model/project.entity';


@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,

  ) {}

  public async createProject(project: Project): Promise<Project> {
    this.projectRepository.create(project);
    return this.projectRepository.save(project);
  }

  public async getProjectAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }
  public async getProjectById(id): Promise<Project | undefined> {
    return await this.projectRepository.findOneBy({id});
  }
  public async getProjectByEmployeeId(id): Promise<Project[]> {
    return await this.projectRepository.find({ where: { referringEmployeeId: id }, relations: ["referringEmployee"] });
  }

}
