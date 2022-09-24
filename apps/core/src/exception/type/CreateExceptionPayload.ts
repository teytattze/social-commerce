import { HttpStatus } from 'src/common';

export interface CreateExceptionPayload<TData> {
  statusCode: HttpStatus;
  errorCode?: string;
  message: string;
  data?: TData;
}
