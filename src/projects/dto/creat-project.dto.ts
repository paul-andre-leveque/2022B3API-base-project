import { IsNotEmpty, IsUUID, MinLength } from 'class-validator';

export class CreateProjectDto {
  @MinLength(3)
  @IsNotEmpty()
  name!: string;

  @IsUUID(4)
  @IsNotEmpty()
  referringEmployeeId!: string;
}
