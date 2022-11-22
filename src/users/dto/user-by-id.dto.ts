import { IsNotEmpty, IsUUID } from 'class-validator';

export class UserByIdDto {
  @IsUUID(4)
  @IsNotEmpty()
  public readonly id!: string;
}
