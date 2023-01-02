import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  startDate!: string;

  @Column()
  endDate!: string;

  @Column('uuid')
  prohectId!: string;

  @Column('uuid')
  userId!: string;
}
