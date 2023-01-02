import { IsNotEmpty, IsUUID } from 'class-validator';

export class ProjectByIdDto {
  @IsUUID(4)
  @IsNotEmpty()
  id!: string;
}
