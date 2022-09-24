import { AccountRepositoryPort, AccountUseCaseDto, FindAccountByIdUseCase } from '../../../domain/account';
export declare class FindAccountByIdService implements FindAccountByIdUseCase {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepositoryPort);
    execute(id: string): Promise<AccountUseCaseDto>;
}
//# sourceMappingURL=FindAccountByIdService.d.ts.map