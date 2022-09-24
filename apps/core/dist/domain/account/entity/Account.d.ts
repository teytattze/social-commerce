import { Entity } from '../../../common';
import { CreateAccountEntityPayload } from './type/CreateAccountEntityPayload';
import { UpdateAccountEntityPayload } from './type/UpdateAccountEntityPayload';
export declare class Account extends Entity<string> {
    private email;
    private password;
    private createdAt;
    private updatedAt;
    constructor(payload: CreateAccountEntityPayload);
    getEmail(): string;
    getPassword(): string;
    getCreatedAt(): Date;
    getUpdatedAt(): Date;
    hashPassword(): Promise<void>;
    comparePassword(password: string): Promise<boolean>;
    update(payload: UpdateAccountEntityPayload): Promise<void>;
    static new(payload: CreateAccountEntityPayload): Promise<Account>;
}
//# sourceMappingURL=Account.d.ts.map