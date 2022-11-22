import { Exclude } from 'class-transformer';

export class UserDto {
  id!: string;

  username!: string;
  
  email!: string;

  @Exclude()

  password!: string;

  public role!: 'Employee' | 'Admin' | 'ProjectManager';
}
