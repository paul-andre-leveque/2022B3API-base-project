import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../../users/dto/login-user.dto';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, 
    private jwtService: JwtService) {}


  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const payload = { email: loginUserDto.email, sub: loginUserDto.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
