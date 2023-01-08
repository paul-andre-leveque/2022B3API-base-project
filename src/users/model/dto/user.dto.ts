import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class UserDto {
  @IsUUID()
  @IsNotEmpty()
  public readonly id!: string;

  @IsNotEmpty()
  public readonly username!: string;

  @IsEmail()
  @IsNotEmpty()
  public readonly email!: string;

  @Exclude()
  public readonly password!: string;

  @IsNotEmpty()
  public readonly role!: 'Employee' | 'Admin' | 'ProjectManager';
}
