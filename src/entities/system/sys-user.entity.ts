import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_user')
export default class SysUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'org_id' })
  @ApiProperty()
  orgId: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column({ unique: true })
  @ApiProperty()
  username: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column()
  @ApiProperty({ nullable: true })
  nickname: string;

  @Column()
  @ApiProperty({ nullable: true })
  avatar: string;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  email: string;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  phone: string;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  remark: string;

  @Column({ type: 'tinyint', default: 1 })
  @ApiProperty()
  status: number;

  @Column({ name: 'delete_flag', type: 'tinyint', default: 0 })
  @ApiProperty()
  deleteFlag: number;
}
