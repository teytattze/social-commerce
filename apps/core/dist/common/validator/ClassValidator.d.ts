import { ClassValidatorDetails } from './type/ClassValidatorDetails';
import { Nullable } from '../type/CommonTypes';
export declare class ClassValidator {
    static validate<TTarget extends object>(target: TTarget, context?: string): Promise<Nullable<ClassValidatorDetails>>;
}
//# sourceMappingURL=ClassValidator.d.ts.map