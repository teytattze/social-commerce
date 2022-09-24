import { Nullable } from 'src/common';
import {
  Account,
  AccountNotFoundException,
  AccountRepositoryPort,
  DeleteAccountByIdUseCase,
} from 'src/domain/account';

export class DeleteAccountByIdService implements DeleteAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(id: string): Promise<void> {
    const account: Nullable<Account> = await this.accountRepository.findById(id);
    if (!account) throw new AccountNotFoundException();
    await this.accountRepository.deleteById(id);
  }
}
