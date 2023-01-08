import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne,} from 'typeorm';
import { User } from '../../users/model/user.entity';

@Entity()
export class Project {

  @PrimaryGeneratedColumn("uuid")
  id! : string;

  @Column({ unique: true,})
  name!: string;

  @Column({unique :true, nullable:true})
  description?: string

  @OneToOne(() => User, (user) => user.id)
  referringEmployeeId!: string
  @ManyToOne(type => User, user => user.projects)
  referringEmployee !: User;


}
