import { Exception, HttpStatus } from 'src/common';
import { ErrorCode } from './ErrorCode';
import { ErrorMessage } from './ErrorMessage';

export class AccountNotFoundException extends Exception<void> {
  constructor(errorCode?: string, message?: string) {
    super({
      errorCode: errorCode || ErrorCode.ACCOUNT_NOT_FOUND,
      statusCode: HttpStatus.NOT_FOUND,
      message: message || ErrorMessage.ACCOUNT_NOT_FOUND,
    });
  }
}
