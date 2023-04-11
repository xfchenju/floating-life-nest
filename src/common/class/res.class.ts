export class ResponseDto<T> {
  readonly data: T;

  readonly code: number;

  readonly message: string;

  constructor(code: number, data?: T, message = 'success') {
    this.code = code;
    this.data = data;
    this.message = message;
  }

  static success(data?: any) {
    return new ResponseDto(200, data);
  }
}
