import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import {
  AccountDITokens,
  CreateAccountUseCase,
  DeleteAccountByIdUseCase,
  FindAccountByEmailUseCase,
  FindAccountByIdUseCase,
  FindAllAccountsUseCase,
  UpdateAccountByIdUseCase,
} from '@sc/core';
import { CreateAccountAdapter } from '../adapter/usecase/CreateAccountAdapter';
import { UpdateAccountByIdAdapter } from '../adapter/usecase/UpdateAccountByIdAdapter';
import { HttpRestApiCreateAccountBody } from './dto/HttpRestApiCreateAccountBody';
import { HttpRestApiUpdateAccountBody } from './dto/HttpRestApiUpdateAccountBody';

@Controller('accounts')
export class AccountController {
  constructor(
    @Inject(AccountDITokens.CREATE_USE_CASE)
    private readonly createAccountUseCase: CreateAccountUseCase,

    @Inject(AccountDITokens.DELETE_BY_ID_USE_CASE)
    private readonly deleteAccountByIdUseCase: DeleteAccountByIdUseCase,

    @Inject(AccountDITokens.FIND_BY_EMAIL_USE_CASE)
    private readonly findAccountByEmailUseCase: FindAccountByEmailUseCase,

    @Inject(AccountDITokens.FIND_BY_ID_USE_CASE)
    private readonly findAccountByIdUseCase: FindAccountByIdUseCase,

    @Inject(AccountDITokens.FIND_ALL_USE_CASE)
    private readonly findAllAccountsUseCase: FindAllAccountsUseCase,

    @Inject(AccountDITokens.UPDATE_BY_ID_USE_CASE)
    private readonly updateAccountByIdUseCase: UpdateAccountByIdUseCase,
  ) {}

  @Get()
  async findAll() {
    return await this.findAllAccountsUseCase.execute();
  }

  @Post()
  async create(@Body() body: HttpRestApiCreateAccountBody) {
    const adapter = CreateAccountAdapter.new({
      email: body.email,
      password: body.password,
    });
    const account = await this.createAccountUseCase.execute(adapter);
    return account;
  }

  @Get('emails/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.findAccountByEmailUseCase.execute(email);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.findAccountByIdUseCase.execute(id);
  }

  @Put(':id')
  async updateById(@Param('id') id: string, @Body() body: HttpRestApiUpdateAccountBody) {
    const adapter = UpdateAccountByIdAdapter.new({
      id,
      email: body.email,
      password: body.password,
    });
    const account = await this.updateAccountByIdUseCase.execute(adapter);
    return account;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    await this.deleteAccountByIdUseCase.execute(id);
  }
}
