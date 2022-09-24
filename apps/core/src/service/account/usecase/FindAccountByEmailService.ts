import { HttpStatus, Nullable } from 'src/common';
import {
  Account,
  AccountRepositoryPort,
  AccountUseCaseDto,
  FindAccountByEmailUseCase,
} from 'src/domain/account';
import { Exception } from 'src/exception';

export class FindAccountByEmailService implements FindAccountByEmailUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(email: string): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findByEmail(email);
    if (!account)
      throw Exception.new({ statusCode: HttpStatus.NOT_FOUND, message: 'Account not found' });
    return AccountUseCaseDto.fromAccount(account);
  }
}
