import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Module } from './modules';

@Entity()
export class Course {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column()
  thumbnail: string;

  @Column({ default: 0, nullable: true })
  points: number;

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ default: new Date() })
  updated_at: Date;

  @OneToMany(() => Course, course => course.modules)
  @JoinColumn()
  modules: Module;
}
