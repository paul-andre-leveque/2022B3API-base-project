import {
  Body,
  ClassSerializerInterceptor,
  Controller,

  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProjectDto } from '../model/dto/create-project.dto';
import { ProjectService } from '../services/project.service';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { UsersService } from '../../users/services/users.service';
import { Project } from '../model/project.entity';
import { Role } from '../../auth/interface/enum.role';
import { RolesGuard } from '../../auth/guards/roles.guard';



@Controller('projects')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class ProjectController {
  constructor(private readonly projectService: ProjectService,
              private readonly usersService: UsersService,

  ) {}

  @UsePipes(ValidationPipe)
  @UseGuards(RolesGuard)
  @Post()
  async createProject(@Req() req , @Body() body: CreateProjectDto) {
    if(req.user.role !== Role.ADMIN) throw new UnauthorizedException();
    const referringEmployee = await this.usersService.getProfileId(body.referringEmployeeId);

    if (referringEmployee.role === Role.EMPLOYEE) {
      throw new UnauthorizedException();
    }

    const project = new Project();
    project.name = body.name;
    project.referringEmployee = referringEmployee;
    return await this.projectService.createProject(project);
  }
  @UsePipes(ValidationPipe)
  @Get()
  async findAllProjects(@Req() req ,) {
    if(req.user.role === Role.EMPLOYEE) {
      return await this.projectService.getProjectByEmployeeId(req.user.id);
    };
    return await this.projectService.getProjectAll();
  }


  @Get(':id')
  async findProjectById(@Req() req, @Param(':id') id) {
    const r =  await this.projectService.getProjectById(id);
    if(!r) throw new NotFoundException();

    return r;
  }

}
