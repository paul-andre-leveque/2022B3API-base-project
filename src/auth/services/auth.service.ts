import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/dto/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService, 
    private jwtService: JwtService) {}


  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.loginUser(email);
    if (user === null) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) return user;
    
    return null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
