import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Api } from 'src/utils/api';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto, GetUserListDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly API = new Api((error: string) => {
    console.log('error', error);
  });

  @ApiOperation({ summary: '创建用户' })
  @ApiOkResponse({ type: CreateUserDto })
  @Post('/create')
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }

  @ApiOperation({ summary: '更新用户' })
  @ApiOkResponse({ type: UpdateUserDto })
  @Post('/update')
  async update(@Body() user: UpdateUserDto) {
    return await this.userService.updateById(user.id, user);
  }

  @ApiOkResponse({ type: CreateUserDto })
  @Get('/getUserList')
  async getUserList(@Query() query: GetUserListDto) {
    return await this.userService.getUserList(query);
  }

  @ApiOkResponse({ type: CreateUserDto })
  @Get('/getUserById')
  async getUserById(@Query() query) {
    console.log('getUserById params', query);
    return await this.userService.getUserById(query.id);
  }

  @Post('/delete')
  async removeById(@Query() query) {
    console.log('removeById params', query);
    return await this.userService.removeById(query.id);
  }
}
