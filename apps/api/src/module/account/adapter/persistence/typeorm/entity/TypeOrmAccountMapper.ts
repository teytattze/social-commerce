import { Account } from '@sc/core';
import { TypeOrmAccount } from './TypeOrmAccount';

export class TypeOrmAccountMapper {
  public static toOrmEntity(domainAccount: Account): TypeOrmAccount {
    const ormAccount = new TypeOrmAccount();

    ormAccount.id = domainAccount.getId();
    ormAccount.email = domainAccount.getEmail();
    ormAccount.password = domainAccount.getPassword();
    ormAccount.role = domainAccount.getRole();
    ormAccount.createdAt = domainAccount.getCreatedAt();
    ormAccount.updatedAt = domainAccount.getUpdatedAt();

    return ormAccount;
  }

  public static toOrmEntities(domainAccount: Account[]): TypeOrmAccount[] {
    return domainAccount.map((account) => this.toOrmEntity(account));
  }

  public static toDomainEntity(ormAccount: TypeOrmAccount): Account {
    return new Account({
      id: ormAccount.id,
      email: ormAccount.email,
      password: ormAccount.password,
      role: ormAccount.role,
      createdAt: ormAccount.createdAt,
      updatedAt: ormAccount.updatedAt,
    });
  }

  public static toDomainEntities(ormAccount: TypeOrmAccount[]): Account[] {
    return ormAccount.map((account) => this.toDomainEntity(account));
  }
}
