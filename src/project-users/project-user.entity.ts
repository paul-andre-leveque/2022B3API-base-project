import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class ProjectUser {

  @PrimaryGeneratedColumn()
  id! : string;

  @Column()
  startDate! : string;

  @Column()
  endDate! : string;

  @Column()
  prohectId!: string;

  @Column()
  userId! : string;

}
