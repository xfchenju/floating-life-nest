import { UserEntity } from './user.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * 创建用户
   * @param user
   * @returns
   */
  async create(user: Partial<UserEntity>): Promise<number> {
    console.log('service user create', user);
    const { username } = user;
    const doc = await this.userRepository.findOne({ where: { username } });
    if (doc) {
      throw new HttpException('用户已存在', 500);
    }
    const { id } = await this.userRepository.save(user);
    return id;
  }

  /**
   * 更新用户
   * @param user
   * @returns
   */
  async updateById(id: number, user: Partial<UserEntity>): Promise<UserEntity> {
    console.log('service user update', user);
    if (!id) {
      throw new HttpException('缺少用户id', 400);
    }
    const existUser = await this.userRepository.findOne({ where: { id } });
    if (!existUser) {
      throw new HttpException(`id为${id}的用户不存在`, 500);
    }
    const updateUser = this.userRepository.merge(existUser, user);
    return this.userRepository.save(updateUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async getUserById(id: number) {
    console.log('getUserById', id);
    if (!id) {
      throw new HttpException('缺少用户id', 400);
    }
    const existUser = await this.userRepository.findOne({ where: { id } });
    if (!existUser) {
      throw new HttpException(`id为${id}的用户不存在`, 500);
    }
    return existUser;
  }

  async removeById(id: number) {
    if (!id) {
      throw new HttpException('缺少用户id', 400);
    }
    const existUser = await this.userRepository.findOne({ where: { id } });
    if (!existUser) {
      throw new HttpException(`id为${id}的用户不存在`, 500);
    }
    return this.userRepository.remove(existUser);
  }
}
