import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
import { CreateUserDto } from '../model/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public findAll = async (): Promise<User[]> => {
    return await this.usersRepository.find();
  };

  public async getProfileId(uuid: string): Promise<User | never> {
    const user = await this.usersRepository.findOneBy({ id: uuid });
    if (!user) throw new NotFoundException();
    return user;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    user.password = await bcrypt.hash(user.password, saltOrRounds);
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  public loginUser(mail: string): Promise<User> {
    return this.usersRepository.findOneBy({
      email: mail,
    });
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
