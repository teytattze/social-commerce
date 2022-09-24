import { ClassValidatorDetails } from './type/ClassValidatorDetails';
import { validate, ValidationError } from 'class-validator';
import { Nullable } from '../type/CommonTypes';

export class ClassValidator {
  public static async validate<TTarget extends object>(
    target: TTarget,
    context?: string,
  ): Promise<Nullable<ClassValidatorDetails>> {
    const errors: ValidationError[] = await validate(target);
    if (errors.length === 0) return null;

    const details: ClassValidatorDetails = {
      context: context || target.constructor.name,
      errors: errors.map((err) => ({
        property: err.property,
        message: err.constraints ? Object.values(err.constraints) : [],
      })),
    };
    return details;
  }
}
