import { HttpStatus, Nullable } from 'src/common';
import { Account, AccountRepositoryPort, AccountUseCaseDto, FindAccountByIdUseCase } from 'src/domain/account';
import { Exception } from 'src/exception';

export class FindAccountByIdService implements FindAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(id: string): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findById(id);
    if (!account) throw Exception.new({ statusCode: HttpStatus.NOT_FOUND, message: 'Account not found' });
    return AccountUseCaseDto.fromAccount(account);
  }
}
