import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Project } from '../../projects/model/project.entity';

import { Role } from '../../auth/interface/enum.role';




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
  role!: Role;

  @OneToMany(type => Project, project => project.referringEmployee, { cascade: true })
  projects!: Project[];




}

