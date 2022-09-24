import { AccountRepositoryPort, AccountUseCaseDto, UpdateAccountByIdPort, UpdateAccountByIdUseCase } from '../../../domain/account';
export declare class UpdateAccountByIdService implements UpdateAccountByIdUseCase {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepositoryPort);
    execute(payload: UpdateAccountByIdPort): Promise<AccountUseCaseDto>;
}
//# sourceMappingURL=UpdateAccountByIdService.d.ts.map