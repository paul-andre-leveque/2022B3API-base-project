import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../model/dto/create-user.dto';
import { User } from '../model/user.entity';
import { LocalAuthGuard } from '../../auth/guards/auth.guard';
import { AuthService } from '../../auth/services/auth.service';
import { UserByIdDto } from '../model/dto/user-by-id.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { JwtToken } from '../../auth/interface/Jwtoken';
import { UserDto } from '../model/dto/user.dto';
import { plainToInstance } from 'class-transformer';



@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post('auth/sign-up')
  signUp(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.usersService.createUser(user).then((it) => plainToInstance(UserDto, it));
  }

  @UseGuards(LocalAuthGuard)
  @UsePipes(ValidationPipe)
  @Post('auth/login')
  async login(@Req() req: Request & { user: User }) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param() params: UserByIdDto): Promise<UserDto> {
    return this.usersService.getProfileId(params.id).then((it) => plainToInstance(UserDto, it));
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfileMe(@Req() req: Request & { user: JwtToken }): Promise<UserDto> {
    return this.usersService.getProfileId(req.user.sub).then((it) => plainToInstance(UserDto, it));
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<UserDto[]> {
    return this.usersService.findAll().then((it) => it.map((it) => plainToInstance(UserDto, it)));
  }
}

