import { Exception } from 'src/exception/Exception';
import { HttpStatus } from '../enum/HttpStatus';
import { Nullable, Optional } from '../type/CommonTypes';
import { ClassValidator } from '../validator/ClassValidator';
import { ClassValidatorDetails } from '../validator/type/ClassValidatorDetails';

export class Entity<TIdentifier extends string | number> {
  protected id: Optional<TIdentifier>;

  public getId(): TIdentifier {
    if (typeof this.id === 'undefined')
      throw Exception.new({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Entity ID is undefined',
      });
    return this.id;
  }

  public async validate(): Promise<void> {
    const details: Nullable<ClassValidatorDetails> = await ClassValidator.validate(this);
    if (details)
      throw Exception.new<ClassValidatorDetails>({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Entity Validation Failed',
        data: details,
      });
  }
}
