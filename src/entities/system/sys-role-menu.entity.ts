import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_role_menu')
export abstract class SysRoleMenu extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'role_id' })
  @ApiProperty()
  roleId: number;

  @Column({ name: 'menu_id' })
  @ApiProperty()
  menuId: number;
}
