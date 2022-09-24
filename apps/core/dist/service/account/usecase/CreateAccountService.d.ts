import { AccountRepositoryPort, AccountUseCaseDto, CreateAccountPort, CreateAccountUseCase } from '../../../domain/account';
export declare class CreateAccountService implements CreateAccountUseCase {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepositoryPort);
    execute(payload: CreateAccountPort): Promise<AccountUseCaseDto>;
}
//# sourceMappingURL=CreateAccountService.d.ts.map