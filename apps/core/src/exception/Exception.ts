import { Optional } from 'src/common';
import { CreateExceptionPayload } from './type/CreateExceptionPayload';

export class Exception<TData> extends Error {
  private readonly statusCode: number;
  private readonly errorCode: Optional<string>;
  private readonly data: Optional<TData>;

  constructor(payload: CreateExceptionPayload<TData>) {
    super(payload.message);

    this.statusCode = payload.statusCode;
    this.errorCode = payload.errorCode;
    this.data = payload.data;
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public getErrorCode(): Optional<string> {
    return this.errorCode;
  }

  public getMessage(): string {
    return this.message;
  }

  public getData(): Optional<TData> {
    return this.data;
  }

  public static new<TData>(payload: CreateExceptionPayload<TData>) {
    return new Exception(payload);
  }
}
