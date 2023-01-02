import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type EventStatus = 'Pending' | 'Accepted' | 'Declined';
export type EventType = 'RemoteWwork' | 'Paidleave';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  date!: Date;

  @Column()
  eventStatus?: EventStatus;

  @Column()
  eventType!: EventType;

  @Column()
  eventDescription?: string;

  @Column('uuid')
  userId!: string;
}
