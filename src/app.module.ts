import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './modules/user/user.entity';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './modules/todo/todo.module';
import { Todo } from './modules/todo/entities/todo.entity';
import {
  ConfigurationKeyPaths,
  getConfiguration,
} from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局
      load: [getConfiguration],
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService<ConfigurationKeyPaths>,
      ) => ({
        type: 'mysql', // 数据库类型
        entities: [UserEntity, Todo], // 数据表实体
        host: configService.get('database.host'), // 主机，默认为localhost
        port: configService.get('database.port'), // 端口号
        username: configService.get('database.username'), // 用户名
        password: configService.get('database.password'), // 密码
        database: configService.get('database.database'), //数据库名
        charset: 'utf8mb4',
        timezone: '+08:00', //服务器上配置的时区
        synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
      }),
    }),
    UserModule,
    AuthModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
