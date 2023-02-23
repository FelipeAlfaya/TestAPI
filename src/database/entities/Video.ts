import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Module } from './Modules';

@Entity()
export class Video {
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

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ default: new Date() })
  updated_at: Date;

  @OneToMany(() => Module, module => module.videos)
  @JoinColumn()
  module: Module;
}
