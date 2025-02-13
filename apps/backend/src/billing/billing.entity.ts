import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productCode: number;

  @Column()
  location: string;

  @Column('decimal', { precision: 10, scale: 2 })
  premiumPaid: number;
}
