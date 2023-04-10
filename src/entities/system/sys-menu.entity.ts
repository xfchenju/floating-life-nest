import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'sys_menu' })
export abstract class SysMenu extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'parent_id', nullable: true })
  @ApiProperty()
  parentId: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column({ type: 'tinyint', default: 0 })
  @ApiProperty({ description: '类型，0：目录、1：菜单、2：按钮' })
  type: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  @ApiProperty()
  order: number;

  @Column({ nullable: true })
  @ApiProperty()
  icon: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'router路径' })
  path: string;

  @Column({ nullable: true })
  @ApiProperty({ description: '权限code' })
  permission: string;

  @Column({ name: 'view_path', nullable: true })
  @ApiProperty({ description: 'vue文件地址' })
  viewPath: string;

  @Column({ nullable: true, default: false })
  @ApiProperty()
  keepalive: boolean;

  @Column({ name: 'is_show', type: 'boolean', nullable: true, default: true })
  @ApiProperty({ description: '是否在菜单显示' })
  isShow: boolean;

  @Column({ name: 'is_ext', type: 'boolean', nullable: true, default: false })
  @ApiProperty({ description: '是否为外链' })
  isExt: boolean;

  @Column({ name: 'open_mode', type: 'tinyint', nullable: true, default: 1 })
  @ApiProperty({ description: '打开外链的方式' })
  openMode: number;

  @Column({ name: 'delete_flag', type: 'tinyint', default: 0 })
  @ApiProperty()
  deleteFlag: number;
}
