import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_role')
export abstract class SysRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'user_id' })
  @ApiProperty()
  userId: number;

  @Column({ unique: true })
  @ApiProperty()
  name: string;

  @Column({ name: 'role_code' })
  @ApiProperty()
  roleCode: string;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  remark: string;

  @Column({ name: 'delete_flag', type: 'tinyint', default: 0 })
  @ApiProperty()
  deleteFlag: number;
}
