import { Optional } from '../type/CommonTypes';
export declare class Entity<TIdentifier extends string | number> {
    protected id: Optional<TIdentifier>;
    getId(): TIdentifier;
    validate(): Promise<void>;
}
//# sourceMappingURL=Entity.d.ts.map