import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_role_organization')
export abstract class SysRoleOrganization extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'role_id' })
  @ApiProperty()
  roleId: number;

  @Column({ name: 'organization_id' })
  @ApiProperty()
  organizationId: number;
}
