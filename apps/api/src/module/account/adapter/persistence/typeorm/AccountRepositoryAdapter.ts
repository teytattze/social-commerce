import { InjectRepository } from '@nestjs/typeorm';
import { Account, AccountRepositoryPort, Nullable } from '@sc/core';
import { Repository } from 'typeorm';
import { TypeOrmAccount } from './entity/TypeOrmAccount';
import { TypeOrmAccountMapper } from './entity/TypeOrmAccountMapper';

export class AccountRepositoryAdapter implements AccountRepositoryPort {
  constructor(
    @InjectRepository(TypeOrmAccount)
    private readonly repository: Repository<TypeOrmAccount>,
  ) {}

  async create(account: Account): Promise<Nullable<Account>> {
    const ormAccount = TypeOrmAccountMapper.toOrmEntity(account);
    const result = await this.repository.save(ormAccount);
    return TypeOrmAccountMapper.toDomainEntity(result);
  }

  async findAll() {
    const ormAccounts = await this.repository.find();
    return TypeOrmAccountMapper.toDomainEntities(ormAccounts);
  }

  async findByEmail(email: string): Promise<Nullable<Account>> {
    const ormAccount = await this.repository.findOne({ where: { email } });
    if (!ormAccount) return null;
    return TypeOrmAccountMapper.toDomainEntity(ormAccount);
  }

  async findById(id: string): Promise<Nullable<Account>> {
    const ormAccount = await this.repository.findOne({ where: { id } });
    if (!ormAccount) return null;
    return TypeOrmAccountMapper.toDomainEntity(ormAccount);
  }

  async updateById(account: Account): Promise<Nullable<Account>> {
    const ormAccount = TypeOrmAccountMapper.toOrmEntity(account);
    const result = await this.repository.save(ormAccount);
    return TypeOrmAccountMapper.toDomainEntity(result);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
