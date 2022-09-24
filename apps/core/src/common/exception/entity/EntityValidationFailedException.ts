import { HttpStatus } from '../../enum/HttpStatus';
import { ErrorCode } from '../ErrorCode';
import { ErrorMessage } from '../ErrorMessage';
import { Exception } from '../Exception';

export class EntityValidationFailedException extends Exception<void> {
  constructor(message?: string) {
    super({
      errorCode: ErrorCode.ENTITY_VALIDATION_FAILED,
      statusCode: HttpStatus.BAD_REQUEST,
      message: message || ErrorMessage.ENTITY_VALIDATION_FAILED,
    });
  }
}
