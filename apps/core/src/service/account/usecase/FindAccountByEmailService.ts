import { Nullable } from 'src/common';
import {
  Account,
  AccountNotFoundException,
  AccountRepositoryPort,
  AccountUseCaseDto,
  FindAccountByEmailUseCase,
} from 'src/domain/account';

export class FindAccountByEmailService implements FindAccountByEmailUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(email: string): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findByEmail(email);
    if (!account) throw new AccountNotFoundException();
    return AccountUseCaseDto.fromAccount(account);
  }
}
