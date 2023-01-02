import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

export type UserRole = 'Employee' | 'Admin' | 'ProjectManage' ;
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id! : string;

  @Column({ unique: true,})
  username!: string;

  @Column({unique: true})
  email!: string;

  @Exclude()
  @Column()
  password!: string;

  @Column({ default: "Employee" })
  role?: UserRole;
}

