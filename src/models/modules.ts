import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Video } from './video';

@Entity()
export class Module {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ default: new Date() })
  updated_at: Date;

  @ManyToOne(() => Video, video => video.module, {
    cascade: true,
  })
  videos: Video[];
}
