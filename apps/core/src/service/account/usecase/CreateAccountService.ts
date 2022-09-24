import { Nullable } from 'src/common';
import {
  Account,
  AccountEmailExistedException,
  AccountRepositoryPort,
  AccountUseCaseDto,
  CreateAccountPort,
  CreateAccountUseCase,
} from 'src/domain/account';

export class CreateAccountService implements CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(payload: CreateAccountPort): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findByEmail(payload.email);
    if (account) throw new AccountEmailExistedException();

    const newAccount: Account = await Account.new({
      email: payload.email,
      password: payload.password,
      role: payload.role,
    });

    await this.accountRepository.create(newAccount);

    return AccountUseCaseDto.fromAccount(newAccount);
  }
}
