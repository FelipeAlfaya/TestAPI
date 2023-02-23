import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';
import * as crypto from 'crypto';

@Entity({
  name: 'users',
})
export default class User {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column({
    select: false,
  })
  public password: string;

  @Column({ nullable: true })
  public avatar: string;

  @Column({ nullable: true })
  public cpf: string;

  @Column({ nullable: false })
  public income: string;

  @Column({ nullable: true, unique: true })
  public phone: string;

  @Column({ nullable: true })
  public address: string;

  @Column({ nullable: true })
  public city: string;

  @Column({ nullable: true })
  public state: string;

  @Column({ nullable: true })
  public country: string;

  @Column({ nullable: true })
  public zip_code: string;

  @Column({ nullable: true })
  public birth_date: string;

  @Column({ nullable: true })
  public profession: string;

  @Column({ default: 0, nullable: true })
  public points: number;

  @Column()
  public createdAt: Date;

  @Column()
  public updatedAt: Date;

  @BeforeUpdate()
  public updateTimestamp() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  public updateUserInfo() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.id = crypto.randomUUID();
  }

  public toString() {
    return `User: ${this.name} - ${this.email}`;
  }
}
