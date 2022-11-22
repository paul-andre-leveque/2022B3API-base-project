import { Controller, Post, Body, UsePipes,ValidationPipe, UseInterceptors, ClassSerializerInterceptor, UseGuards, Req } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../dto/user.entity';
import { LocalAuthGuard } from '../../auth/guards/auth.guard';
import { AuthService } from '../../auth/services/auth.service';


@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService ) {}

  @Post('auth/sign-up')
  @UsePipes(ValidationPipe)
  signUp( @Body () createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);

  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @UsePipes(ValidationPipe)
  async login(@Req() req: Request & { user: User }) {
    return this.authService.login(req.user);
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

