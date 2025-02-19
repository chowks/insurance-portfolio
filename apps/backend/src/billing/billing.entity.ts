import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  photo: string;

  @Column()
  productCode: number;

  @Column()
  location: string;

  @Column('decimal', { precision: 10, scale: 2 })
  premiumPaid: number;
}
