import { compare, genSalt, hash } from 'bcryptjs';
import { Entity } from 'src/common';
import { v4 } from 'uuid';
import { AccountRole } from './enum/AccountRole';
import { CreateAccountEntityPayload } from './type/CreateAccountEntityPayload';
import { UpdateAccountEntityPayload } from './type/UpdateAccountEntityPayload';

export class Account extends Entity<string> {
  private email: string;
  private password: string;
  private role: AccountRole;

  constructor(payload: CreateAccountEntityPayload) {
    super();

    this.id = payload.id || v4();
    this.email = payload.email;
    this.password = payload.password;
    this.role = payload.role || AccountRole.CUSTOMER;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): AccountRole {
    return this.role;
  }

  public async hashPassword(): Promise<void> {
    const salt: string = await genSalt(14);
    this.password = await hash(this.password, salt);
    await this.validate();
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.password);
  }

  public async update(payload: UpdateAccountEntityPayload): Promise<void> {
    this.email = payload.email || this.email;
    this.role = payload.role || this.role;
    this.updateTimestamp();
    await this.validate();
  }

  public static async new(payload: CreateAccountEntityPayload): Promise<Account> {
    const account: Account = new Account(payload);
    await account.hashPassword();
    return account;
  }
}
