import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({ description: '父级菜单' })
  parentId: number;

  @ApiProperty({ description: '菜单或权限的名称' })
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  name: string;

  @ApiProperty({ description: '类型，0：目录、1：菜单、2：按钮' })
  @IsIn([0, 1, 2])
  type: number;

  @ApiProperty({ description: '排序' })
  @IsInt()
  @Min(0)
  order: number;

  @ApiProperty({ description: '图标', required: false })
  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.type !== 2)
  icon: string;

  @ApiProperty({ description: '前端路由地址' })
  @IsString()
  @ValidateIf((o) => o.type !== 2)
  path: string;

  @ApiProperty({ description: '权限code' })
  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.type === 2)
  permission: string;

  @ApiProperty({ description: '菜单路由路径或外链' })
  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.type !== 2)
  viewPath: string;

  @ApiProperty({ description: '菜单是否显示', required: false, default: true })
  @IsBoolean()
  @ValidateIf((o) => o.type !== 2)
  readonly isShow: boolean = true;

  @ApiProperty({ description: '开启页面缓存', required: false, default: false })
  @IsBoolean()
  @ValidateIf((o) => o.type === 1)
  readonly keepalive: boolean = false;

  @ApiProperty({ description: '是否外链', required: false, default: false })
  @IsBoolean()
  readonly isExt: boolean = false;

  @ApiProperty({ description: '外链打开方式', required: false, default: 1 })
  @IsIn([1, 2])
  @ValidateIf((o) => o.isExt === true)
  readonly openMode: number;
}

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
  @ApiProperty({ description: '更新的菜单ID' })
  @IsInt()
  @Min(0)
  menuId: number;
}

/**
 * 删除菜单
 */
export class DeleteMenuDto {
  @ApiProperty({ description: '删除的菜单ID' })
  @IsInt()
  @Min(0)
  menuId: number;
}
