import { Nullable } from 'src/common';
import { Account } from '../../entity/Account';

export interface AccountRepositoryPort {
  findAll(): Promise<Account[]>;
  findById(id: string): Promise<Nullable<Account>>;
  findByEmail(email: string): Promise<Nullable<Account>>;
  create(account: Account): Promise<Nullable<Account>>;
  updateById(account: Account): Promise<Nullable<Account>>;
  deleteById(id: string): Promise<void>;
}
