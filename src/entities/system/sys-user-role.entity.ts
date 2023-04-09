import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_user_role')
export abstract class SysUserRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'user_id' })
  @ApiProperty()
  userId: number;

  @Column({ name: 'role_id' })
  @ApiProperty()
  roleId: number;
}
