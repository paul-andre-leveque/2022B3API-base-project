import { ProjectUser } from '../model/project-user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class ProjectUsersService {
  constructor(
    @InjectRepository(ProjectUser)
    private projectUsersRepository: Repository<ProjectUser>,
  ) {}
  getAllProjectUsers(): Promise<ProjectUser[]> {
    return this.projectUsersRepository.find();
  }
  getProjectUserById(id: string): Promise<ProjectUser> {
    return this.projectUsersRepository.findOneBy({ id });
  }
  createProjectUser(projectUser: ProjectUser): Promise<ProjectUser> {
    let project = this.projectUsersRepository.create(projectUser);
    return this.projectUsersRepository.save(project);
  }

}