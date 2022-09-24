import { HttpStatus, Nullable } from 'src/common';
import {
  Account,
  AccountRepositoryPort,
  AccountUseCaseDto,
  UpdateAccountByIdPort,
  UpdateAccountByIdUseCase,
} from 'src/domain/account';
import { Exception } from 'src/exception';

export class UpdateAccountByIdService implements UpdateAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(payload: UpdateAccountByIdPort): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findById(payload.id);
    if (!account)
      throw Exception.new({ statusCode: HttpStatus.NOT_FOUND, message: 'Account not found' });

    // TODO: Make password editable
    account.update({
      email: payload.email,
    });

    await this.accountRepository.updateById(account);

    return AccountUseCaseDto.fromAccount(account);
  }
}
