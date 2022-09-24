import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AccountDITokens,
  CreateAccountService,
  DeleteAccountByIdService,
  FindAccountByEmailService,
  FindAccountByIdService,
  FindAllAccountsService,
  UpdateAccountByIdService,
} from '@sc/core';
import { AccountController } from './controller/AccountController';
import { TypeOrmAccount } from './adapter/persistence/typeorm/entity/TypeOrmAccount';
import { AccountRepositoryAdapter } from './adapter/persistence/typeorm/AccountRepositoryAdapter';

const persistenceProviders: Provider[] = [
  {
    provide: AccountDITokens.REPOSITORY,
    useClass: AccountRepositoryAdapter,
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: AccountDITokens.CREATE_USE_CASE,
    useFactory: (accountRepository) => new CreateAccountService(accountRepository),
    inject: [AccountDITokens.REPOSITORY],
  },
  {
    provide: AccountDITokens.DELETE_BY_ID_USE_CASE,
    useFactory: (accountRepository) => new DeleteAccountByIdService(accountRepository),
    inject: [AccountDITokens.REPOSITORY],
  },
  {
    provide: AccountDITokens.FIND_BY_EMAIL_USE_CASE,
    useFactory: (accountRepository) => new FindAccountByEmailService(accountRepository),
    inject: [AccountDITokens.REPOSITORY],
  },
  {
    provide: AccountDITokens.FIND_BY_ID_USE_CASE,
    useFactory: (accountRepository) => new FindAccountByIdService(accountRepository),
    inject: [AccountDITokens.REPOSITORY],
  },
  {
    provide: AccountDITokens.FIND_ALL_USE_CASE,
    useFactory: (accountRepository) => new FindAllAccountsService(accountRepository),
    inject: [AccountDITokens.REPOSITORY],
  },
  {
    provide: AccountDITokens.UPDATE_BY_ID_USE_CASE,
    useFactory: (accountRepository) => new UpdateAccountByIdService(accountRepository),
    inject: [AccountDITokens.REPOSITORY],
  },
];

@Module({
  controllers: [AccountController],
  imports: [TypeOrmModule.forFeature([TypeOrmAccount])],
  providers: [...persistenceProviders, ...useCaseProviders],
})
export class AccountModule {}
