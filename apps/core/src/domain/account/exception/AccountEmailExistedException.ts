import { Exception, HttpStatus } from 'src/common';
import { ErrorCode } from './ErrorCode';
import { ErrorMessage } from './ErrorMessage';

export class AccountEmailExistedException extends Exception<void> {
  constructor(errorCode?: string, message?: string) {
    super({
      errorCode: errorCode || ErrorCode.ACCOUNT_EMAIL_EXISTED,
      statusCode: HttpStatus.CONFLICT,
      message: message || ErrorMessage.ACCOUNT_EMAIL_EXISTED,
    });
  }
}
