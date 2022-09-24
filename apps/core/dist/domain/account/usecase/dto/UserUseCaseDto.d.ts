import { Account } from '../../entity/Account';
export declare class AccountUseCaseDto {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    static fromAccount(account: Account): AccountUseCaseDto;
    static fromAccounts(accounts: Account[]): AccountUseCaseDto[];
}
//# sourceMappingURL=UserUseCaseDto.d.ts.map