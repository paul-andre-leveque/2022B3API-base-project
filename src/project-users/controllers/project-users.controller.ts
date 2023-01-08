import { Controller, } from '@nestjs/common';
import { ProjectUsersService } from '../services/project-users.service';

@Controller('project-users')
export class ProjectUsersController {
  constructor(private readonly projectUsersService: ProjectUsersService) {}

}



