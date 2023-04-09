import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_organization')
export abstract class SysOrganization extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'parent_id', nullable: true })
  @ApiProperty()
  parentId: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column({ name: 'organization_code', nullable: true })
  @ApiProperty()
  organizationCode: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  @ApiProperty()
  order: number;

  @Column({ name: 'delete_flag', type: 'tinyint', default: 0 })
  @ApiProperty()
  deleteFlag: number;
}
