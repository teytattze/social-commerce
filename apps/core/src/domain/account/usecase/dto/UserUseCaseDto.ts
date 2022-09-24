import { Exclude, Expose, plainToClass } from 'class-transformer';
import { Account } from '../../entity/Account';

@Exclude()
export class AccountUseCaseDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  public static fromAccount(account: Account): AccountUseCaseDto {
    return plainToClass(AccountUseCaseDto, account);
  }

  public static fromAccounts(accounts: Account[]): AccountUseCaseDto[] {
    return accounts.map((account: Account) => AccountUseCaseDto.fromAccount(account));
  }
}
