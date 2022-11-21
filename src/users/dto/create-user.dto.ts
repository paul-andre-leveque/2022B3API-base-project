import { IsString, IsNotEmpty, IsEmail, IsIn, IsOptional, MinLength } from "class-validator";
import { UserRole } from "../user.entity";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsIn(['Employee' , 'Admin' , 'ProjectManager'])
  role: UserRole;

}
