import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../dto/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(User)
  private usersRepository: Repository<User>,
  ) {}

  public findAll = async (): Promise<User[]> => { 
      return await this.usersRepository.find();
    }

  public async findOneById(uuid: string): Promise<User | never> {
    const user = await this.usersRepository.findOneBy({ id: uuid });
    if (!user) throw new NotFoundException();
    return user;
  }

  async createUser (body: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    body.password = await bcrypt.hash(body.password, saltOrRounds);
    const newUser = this.usersRepository.create(body)
      return this.usersRepository.save(newUser)
    }

    public findOneByMail(mail: string): Promise<User | null> {
      return this.usersRepository.findOneBy({
        email: mail,
      });
    }
    async deleteUser(id: string): Promise<void> {
      await this.usersRepository.delete(id);
    }
}
  
  
  
  