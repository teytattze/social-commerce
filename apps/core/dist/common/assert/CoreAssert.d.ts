import { Nullable, Optional } from '../type/CommonTypes';
export declare class CoreAssert {
    static isTrue(expression: boolean, exception: Error): void;
    static isFalse(expression: boolean, exception: Error): void;
    static isEmpty<T>(value: Optional<Nullable<T>>, exception: Error): T;
    static isNotEmpty<T>(value: Optional<Nullable<T>>, exception: Error): T;
}
//# sourceMappingURL=CoreAssert.d.ts.map