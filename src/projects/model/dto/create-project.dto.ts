import { IsNotEmpty, IsOptional, IsUUID, MinLength } from 'class-validator';

export class CreateProjectDto {

  readonly id: string;

  @MinLength(3)
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  readonly description: string;

  @IsUUID(4)
  @IsNotEmpty()
  referringEmployeeId!: string;
}
