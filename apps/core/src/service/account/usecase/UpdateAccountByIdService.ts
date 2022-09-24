import { Nullable } from 'src/common';
import {
  Account,
  AccountNotFoundException,
  AccountRepositoryPort,
  AccountUseCaseDto,
  UpdateAccountByIdPort,
  UpdateAccountByIdUseCase,
} from 'src/domain/account';

export class UpdateAccountByIdService implements UpdateAccountByIdUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(payload: UpdateAccountByIdPort): Promise<AccountUseCaseDto> {
    const account: Nullable<Account> = await this.accountRepository.findById(payload.id);
    if (!account) throw new AccountNotFoundException();

    // TODO: Make password editable
    account.update({
      email: payload.email,
      role: payload.role,
    });

    await this.accountRepository.updateById(account);

    return AccountUseCaseDto.fromAccount(account);
  }
}
