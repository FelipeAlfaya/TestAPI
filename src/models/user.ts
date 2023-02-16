import { Column, Entity, PrimaryColumn } from 'typeorm';
import crypto from 'crypto';

@Entity()
export class user {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  cpf: string;

  @Column()
  income: string;

  @Column({ nullable: true, unique: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  zip_code: string;

  @Column({ nullable: true })
  birth_date: string;

  @Column()
  profession: string;

  @Column({ default: 0, nullable: true })
  points: number;

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ default: new Date() })
  updated_at: Date;

  constructor() {
    this.id = crypto.randomBytes(16).toString('hex');
  }
}
