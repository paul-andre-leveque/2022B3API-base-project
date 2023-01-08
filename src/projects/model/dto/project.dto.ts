import { IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class ProjectDto
{
  @IsUUID(4)
  @IsNotEmpty()
    id!: string;

  @MinLength(3)
  @IsNotEmpty()
  @IsString()
    name!: string;

  @IsOptional()
  readonly description: string;

  @IsUUID(4)
  @IsNotEmpty()
  readonly referringEmployeeId!: string;
}