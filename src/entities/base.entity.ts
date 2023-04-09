import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @CreateDateColumn({ name: 'memo' })
  @ApiProperty()
  memo: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: Date;

  // @CreateDateColumn({ name: 'created_by', default: '' })
  // @ApiProperty()
  // createBy: number;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;

  // @CreateDateColumn({ name: 'update_by', default: '' })
  // @ApiProperty()
  // updateBy: number;
}
