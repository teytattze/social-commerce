import { HttpStatus, Nullable } from 'src/common';
import { Account, AccountRepositoryPort, DeleteAccountByIdUseCase } from 'src/domain/account';
import { Exception } from 'src/exception';

export class DeleteAccountByIdService implements DeleteAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(id: string): Promise<void> {
    const account: Nullable<Account> = await this.accountRepository.findById(id);
    if (!account)
      throw Exception.new({ statusCode: HttpStatus.NOT_FOUND, message: 'Account not found' });
    await this.accountRepository.deleteById(id);
  }
}
