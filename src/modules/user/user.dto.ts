import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PageOptionsDto } from 'src/dto/page.dto';

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '用户名必填' })
  readonly username: string;

  @ApiProperty({ description: '昵称' })
  @IsNotEmpty({ message: '昵称必填' })
  readonly nickname: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码必填' })
  readonly password: string;

  @ApiProperty({ description: '头像' })
  @IsNotEmpty({ message: '头像必填' })
  readonly avatar: string;

  @ApiProperty({ description: '邮箱' })
  @IsNotEmpty({ message: '邮箱必填' })
  readonly email: string;
}

export class UpdateUserDto extends CreateUserDto {
  @ApiProperty({ description: '用户ID' })
  @IsNotEmpty({ message: '缺少用户ID入参' })
  @IsNumber({}, { message: '用户ID必须为数字' })
  readonly id: number;
}

export class GetUserListDto extends PageOptionsDto {
  @ApiProperty({ description: '用户名' })
  readonly username?: string;

  @ApiProperty({ description: '昵称' })
  readonly nickname?: string;

  @ApiProperty({ description: '邮箱' })
  readonly email?: string;
}
