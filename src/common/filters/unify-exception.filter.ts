import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { FastifyRequest } from 'fastify';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { getReqMainInfo } from './utils';
import { ResponseDto } from '../class/res.class';
import { UnifyException } from '../exceptions/unify.exception';

@Catch()
export default class UnifyExceptionFilter implements ExceptionFilter {
  // constructor(
  //   @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  // ) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('UnifyExceptionFilter', exception);
    const ctx = host.switchToHttp(); //获取当前执行上下文
    const res = ctx.getResponse<FastifyReply>(); //获取响应对象
    // const req = ctx.getRequest<FastifyRequest>(); //获取请求对象

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // set json response
    res.header('Content-Type', 'application/json; charset=utf-8');
    const code =
      exception instanceof UnifyException
        ? (exception as UnifyException).getErrorCode()
        : status;

    let message = '服务器异常，请稍后再试';

    message =
      exception instanceof HttpException ? exception.message : `${exception}`;

    // this.logger.error(message, {
    //   status,
    //   req: getReqMainInfo(req),
    // });

    // if (status >= 500) {
    //   this.logger.error(exception, ApiExceptionFilter.name);
    // }

    const result = new ResponseDto(code, null, message);
    res.status(status).send(result);
  }
}
