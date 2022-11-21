import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';


@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(User)
  private usersRepository: Repository<User>,
  ) {}
  async createUser (body: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(body)
      return this.usersRepository.save(newUser)
    }

    async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        email: email,
        
      },
    });

    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }

    return user;
}
}
  
  
  
  