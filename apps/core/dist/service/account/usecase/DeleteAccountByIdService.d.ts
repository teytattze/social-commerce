import { AccountRepositoryPort, DeleteAccountByIdUseCase } from '../../../domain/account';
export declare class DeleteAccountByIdService implements DeleteAccountByIdUseCase {
    private readonly accountRepository;
    constructor(accountRepository: AccountRepositoryPort);
    execute(id: string): Promise<void>;
}
//# sourceMappingURL=DeleteAccountByIdService.d.ts.map