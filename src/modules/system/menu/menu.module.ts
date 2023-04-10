import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysMenu } from 'src/entities/system/sys-menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SysMenu])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class SysMenuModule {}
