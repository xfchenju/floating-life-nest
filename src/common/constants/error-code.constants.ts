export const ErrorCodeMap = {
  100001: '系统异常',
} as const;

export type ErrorCodeMapType = keyof typeof ErrorCodeMap;
