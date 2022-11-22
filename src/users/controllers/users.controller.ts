import { Controller, Post, Body, UsePipes,ValidationPipe, UseInterceptors, ClassSerializerInterceptor, UseGuards, Req, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../dto/user.entity';
import { LocalAuthGuard } from '../../auth/guards/auth.guard';
import { AuthService } from '../../auth/services/auth.service';
import { UserByIdDto } from '../dto/user-by-id.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { JwtToken } from '../../auth/interface/Jwtoken';
import { UserDto } from '../dto/user.dto';
import { plainToInstance } from 'class-transformer';
// import { JwtToken} from  '../../auth/interface/jwtoken';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService ) {}

  
  @UsePipes(ValidationPipe)
  @Post('auth/sign-up')
  signUp(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.usersService
      .createUser(user)
      .then((it) => plainToInstance(UserDto, it));
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
      return this.usersService
      .getProfileId(params.id)
      .then((it) => plainToInstance(UserDto, it));
      
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Req() req: Request & { user: JwtToken }): Promise<UserDto> {    
      return this.usersService
      .getProfileId(req.user.sub)
      .then((it) => plainToInstance(UserDto, it));
      
    }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

}
  
  
  
























  
  
  // @UsePipes(new ValidationPipe({ transform: true}))
  // async createUser(@Body() body: CreateUserDto): Promise<any> {
    
  //   return this.usersService.createUser(body);
  // }

  



//////////////////////////////////////////
//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

//   // @Patch(':id')
//   // update(@Param('id') id: string, @Body() updateUserssDto: UpdateUserssDto) {
//   //   return this.userssService.update(+id, updateUserssDto);
//   // }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }

