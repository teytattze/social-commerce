import { Nullable } from 'src/common';
import {
  Account,
  AccountNotFoundException,
  AccountRepositoryPort,
  AccountUseCaseDto,
  FindAccountByIdUseCase,
} from 'src/domain/account';

export class FindAccountByIdService implements FindAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(id: string): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findById(id);
    if (!account) throw new AccountNotFoundException();
    return AccountUseCaseDto.fromAccount(account);
  }
}
