import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Project {

  @PrimaryGeneratedColumn("uuid")
  
  id! : string;

  @Column({ unique: true,})

  name!: string;

  @Column("uuid")

  referringEmployeeId!: string;
}
