import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Project {

  @PrimaryGeneratedColumn()
  id! : string;

  @Column()
  name : string;

  @Column()
  ereferringEmployeeId! : string;

}
