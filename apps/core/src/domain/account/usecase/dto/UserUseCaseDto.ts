import { Exclude, Expose, plainToClass } from 'class-transformer';
import { Account } from '../../entity/Account';
import { AccountRole } from '../../entity/enum/AccountRole';

@Exclude()
export class AccountUseCaseDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  @Expose()
  role: AccountRole;

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
