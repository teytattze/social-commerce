import { ClassValidatorErrors } from './ClassValidatorErrors';

export interface ClassValidatorDetails {
  context: string;
  errors: ClassValidatorErrors[];
}
