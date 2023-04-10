import { HttpException, Injectable } from '@nestjs/common';
import { CreateMenuDto, UpdateMenuDto } from './menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SysMenu } from 'src/entities/system/sys-menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(SysMenu)
    private readonly sysMenuRepository: Repository<SysMenu>,
  ) {}

  async create(menu: CreateMenuDto) {
    if (menu.type === 2 && menu.parentId === -1) {
      throw new HttpException('222', 500);
    }

    Object.assign(menu, {
      deleteFlag: 0,
    });
    await this.sysMenuRepository.save(menu);
  }

  findAll() {
    return `This action returns all menu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }

  async getMenuList() {
    return await this.sysMenuRepository.find();
  }
}
