import { Content } from 'src/entities/content.entity';
import { UserEntity } from 'src/modules/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('todo')
export class Todo extends Content {
  @Column({ length: 255 })
  content: string;

  @Column()
  status: string;

  @Column()
  deleteFlag: boolean;

  @ManyToOne(() => UserEntity, (user) => user.todo)
  @JoinColumn()
  user: UserEntity;
}
