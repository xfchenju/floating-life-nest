import { Todo } from 'src/modules/todo/entities/todo.entity';
import { UserEntity } from 'src/modules/user/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const getConfiguration = () =>
  ({
    // rootRoleId: parseInt(process.env.ROOT_ROLE_ID || '1'),
    // nodemailer config
    // mailer: {
    //   host: 'xxx',
    //   port: 80,
    //   auth: {
    //     user: 'xxx',
    //     pass: 'xxx',
    //   },
    //   secure: false, // or true using 443
    // },
    // amap config
    // amap: {
    //   key: 'xxx',
    // },
    // jwt sign secret
    jwt: {
      secret: process.env.SECRET || '123456',
    },
    // typeorm config
    database: {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWD || '',
      database: process.env.DB_DATABASE,
      entities: [UserEntity, Todo],
      charset: 'utf8mb4',
      timezone: '+08:00', //服务器上配置的时区
      synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
      logging: ['error'],
    } as MysqlConnectionOptions,
    redis: {
      host: process.env.REDIS_HOST, // default value
      port: parseInt(process.env.REDIS_PORT, 10), // default value
      password: process.env.REDIS_PASSWORD,
      db: process.env.REDIS_DB,
    },
    // logger config
    // logger: {
    //   timestamp: false,
    //   dir: process.env.LOGGER_DIR,
    //   maxFileSize: process.env.LOGGER_MAX_SIZE,
    //   maxFiles: process.env.LOGGER_MAX_FILES,
    //   errorLogName: process.env.LOGGER_ERROR_FILENAME,
    //   appLogName: process.env.LOGGER_APP_FILENAME,
    // },
    // // swagger
    // swagger: {
    //   enable: process.env.SWAGGER_ENABLE === 'true',
    //   path: process.env.SWAGGER_PATH,
    //   title: process.env.SWAGGER_TITLE,
    //   desc: process.env.SWAGGER_DESC,
    //   version: process.env.SWAGGER_VERSION,
    // },
  } as const);

export type ConfigurationType = ReturnType<typeof getConfiguration>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type ConfigurationKeyPaths = Record<NestedKeyOf<ConfigurationType>, any>;
