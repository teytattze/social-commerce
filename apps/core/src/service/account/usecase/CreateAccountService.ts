import { HttpStatus, Nullable } from 'src/common';
import {
  Account,
  AccountRepositoryPort,
  AccountUseCaseDto,
  CreateAccountPort,
  CreateAccountUseCase,
} from 'src/domain/account';
import { Exception } from 'src/exception';

export class CreateAccountService implements CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(payload: CreateAccountPort): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findByEmail(payload.email);
    if (account)
      throw Exception.new({ statusCode: HttpStatus.CONFLICT, message: 'Email already exists' });

    const newAccount: Account = await Account.new({
      email: payload.email,
      password: payload.password,
    });

    await this.accountRepository.create(newAccount);

    return AccountUseCaseDto.fromAccount(newAccount);
  }
}
