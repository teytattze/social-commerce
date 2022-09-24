import { HttpStatus } from '../../enum/HttpStatus';
import { ErrorMessage } from '../ErrorMessage';
import { Exception } from '../Exception';

export class BadRequestException extends Exception<void> {
  constructor(message?: string) {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      message: message || ErrorMessage.BAD_REQUEST,
    });
  }
}
