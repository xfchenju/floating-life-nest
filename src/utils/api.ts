import { API_CODES, API_MSGS } from '../constants/api';
import { ApiOkRes, ApiPagerOkRes, ApiErrRes } from 'src/dto/api.dto';
import { Injectable } from '@nestjs/common';
export interface IPagerOkOpts {
  rows: any[];
  current: number;
  limit: number;
  count: number;
}
export type IErrArgs = [number, string?, Error?];

/**
 * 成功
 */
export class ApiOk implements ApiOkRes {
  code: number = API_CODES.OK;
  msg: string = API_MSGS[API_CODES.OK];
  data: any;
  success = true;
  errorCode?: number = API_CODES.OK;
  constructor(data: any = null, msg: string, errorCode?: number) {
    this.data = data;
    this.msg = msg;
    if (errorCode) this.errorCode = errorCode;
  }
}

/**
 * 分页成功
 */
export class ApiPagerOk implements ApiOkRes {
  code: number = API_CODES.OK;
  msg: string = API_MSGS[API_CODES.OK];
  data: any;
  success = true;
  constructor({ rows = [], current, limit, count }: IPagerOkOpts) {
    this.data = {
      rows,
      current,
      limit,
      count,
    };
  }
}

/**
 * 错误
 */
export class ApiErr implements ApiOkRes {
  code: number = API_CODES.OK;
  msg: string = API_MSGS[API_CODES.FAIL];
  data: any;
  success = false;
  constructor(data: any = null, msg: string) {
    this.data = data;
    this.msg = msg;
  }
}

/**
 * Api响应类
 */
@Injectable()
export class Api {
  log: Function;
  constructor(log: Function) {
    this.log = log;
  }
  /**
   * 成功
   */
  ok = (data: any, msg: string, errorCode?: number) => {
    if (this.log && errorCode != 102) {
      this.log(`${msg} | 调用成功`, data);
    }
    return new ApiOk(data, msg, errorCode);
  };

  /**
   * 分页成功
   */
  pagerOk = (opts: IPagerOkOpts, msg: string) => {
    if (this.log) {
      this.log(`${msg} | 调用成功`);
    }
    return new ApiPagerOk(opts);
  };

  /**
   * 错误
   */
  err = (data: any, msg: string) => {
    if (this.log) {
      this.log(`${msg} | 调用失败`, data);
    }
    return new ApiErr(data, msg);
  };
}
