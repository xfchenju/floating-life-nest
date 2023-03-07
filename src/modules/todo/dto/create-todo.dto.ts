import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ description: '内容' })
  @IsNotEmpty({ message: '请输入' })
  readonly content: string;
}
