import {
  Account,
  AccountRepositoryPort,
  AccountUseCaseDto,
  FindAllAccountsUseCase,
} from 'src/domain/account';

export class FindAllAccountsService implements FindAllAccountsUseCase {
  constructor(private readonly accountRepository: AccountRepositoryPort) {}

  public async execute(): Promise<AccountUseCaseDto[]> {
    const accounts: Account[] = await this.accountRepository.findAll();
    return accounts.map(AccountUseCaseDto.fromAccount);
  }
}
