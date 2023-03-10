import { Body, Controller, Get, Query, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Api } from 'src/utils/api';
import { CreateUserDto, UpdateUserDto, GetUserListDto } from './user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly API = new Api((error: string) => {
    console.log('error', error);
  });

  @ApiOperation({ summary: '注册用户' })
  @ApiOkResponse({ status: 200, type: [UserEntity] })
  @Post('/register')
  async register(@Body() user: CreateUserDto) {
    console.log('register', user);
    return this.userService.register(user);
  }

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
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
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
