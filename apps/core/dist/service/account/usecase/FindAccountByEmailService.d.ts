import { AccountRepositoryPort, AccountUseCaseDto, FindAccountByEmailUseCase } from '../../../domain/account';
export declare class FindAccountByEmailService implements FindAccountByEmailUseCase {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepositoryPort);
    execute(email: string): Promise<AccountUseCaseDto>;
}
//# sourceMappingURL=FindAccountByEmailService.d.ts.map