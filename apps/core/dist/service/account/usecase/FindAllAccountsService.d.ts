import { AccountRepositoryPort, AccountUseCaseDto, FindAllAccountsUseCase } from '../../../domain/account';
export declare class FindAllAccountsService implements FindAllAccountsUseCase {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepositoryPort);
    execute(): Promise<AccountUseCaseDto[]>;
}
//# sourceMappingURL=FindAllAccountsService.d.ts.map