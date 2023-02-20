import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Api } from 'src/utils/api';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly API = new Api((error: string) => {
    console.log('error', error);
  });

  @Post('/create')
  async create(@Body() user) {
    try {
      const id = await this.userService.create(user);
      return this.API.ok(id, 'create');
    } catch (error) {
      return this.API.err('新增失败！', error.message);
    }
  }

  @Post('/update')
  async update(@Body() user) {
    try {
      const res = await this.userService.updateById(user.id, user);
      console.log('update', res);
      return this.API.ok('更新成功！', 'update');
    } catch (error) {
      console.log('update error', error);
      return this.API.err('更新失败！', error.message);
    }
  }

  @Get('/getUserList')
  async getUserList() {
    const data = await this.userService.findAll();
    return this.API.ok(data, 'getUserList');
  }

  @Get('/getUserById')
  async getUserById(@Query() query) {
    console.log('getUserById params', query);
    try {
      const data = await this.userService.getUserById(query.id);
      return this.API.ok(data, 'getUserById');
    } catch (error) {
      console.log('getUserById error', error);
      return this.API.err('失败', error.message);
    }
  }

  @Post('/delete')
  async removeById(@Query() query) {
    console.log('removeById params', query);
    try {
      const data = await this.userService.removeById(query.id);
      return this.API.ok(data, 'removeById');
    } catch (error) {
      console.log('removeById error', error);
      return this.API.err('失败', error.message);
    }
  }
}
