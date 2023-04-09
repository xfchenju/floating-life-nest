import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysMenu } from 'src/entities/system/sys-menu.entity';
import { SysOrganization } from 'src/entities/system/sys-organization.entity';
import { SysRole } from 'src/entities/system/sys-role.entity';
import { SysRoleMenu } from 'src/entities/system/sys-role-menu.entity';
import { SysRoleOrganization } from 'src/entities/system/sys-role-organization.entity';
import { SysUser } from 'src/entities/system/sys-user.entity';
import { SysUserRole } from 'src/entities/system/sys-user-role.entity';
import { SystemController } from './system.controller';
import { SysRoleModule } from './role/role.module';
import { SysMenuModule } from './menu/menu.module';
import { SysOrganizationModule } from './organization/organization.module';
import { SysUserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SysMenu,
      SysRole,
      SysOrganization,
      SysRoleMenu,
      SysRoleOrganization,
      SysUser,
      SysUserRole,
    ]),
    SysMenuModule,
    SysOrganizationModule,
    SysRoleModule,
    SysUserModule,
  ],
  controllers: [SystemController],
})
export class SystemModule {}
