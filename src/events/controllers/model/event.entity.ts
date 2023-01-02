import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id! : string;

  @Column()
  date! : Date;

  @Column()
  eventStatus? : 'Pending' | 'Accepted' | 'Declined' // valeur par defaut : pending;

  @Column()
  eventType!: 'RemoteWwork' | 'Paidleave';

  @Column()
  eventDescription?: string;

  @Column()
  userId!: string;

}
