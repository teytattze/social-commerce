import { HttpStatus } from '../../enum/HttpStatus';
import { ErrorCode } from '../ErrorCode';
import { ErrorMessage } from '../ErrorMessage';
import { Exception } from '../Exception';

export class EntityIdNotFoundException extends Exception<void> {
  constructor(message?: string) {
    super({
      errorCode: ErrorCode.ENTITY_ID_NOT_FOUND,
      statusCode: HttpStatus.NOT_FOUND,
      message: message || ErrorMessage.ENTITY_ID_NOT_FOUND,
    });
  }
}
