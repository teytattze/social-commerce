import { Entity } from 'src/common';
import { v4 } from 'uuid';
import { CreateSellerEntityPayload } from './type/CreateSellerEntityPayload';

export class Seller extends Entity<string> {
  private accountId: string;
  private name: string;
  private email: string;
  private contactNo: string;
  private description: string;

  constructor(payload: CreateSellerEntityPayload) {
    super();

    this.id = payload.id || v4();
    this.accountId = payload.accountId;
    this.name = payload.name;
    this.email = payload.email;
    this.contactNo = payload.contactNo;
    this.description = payload.description;
    this.createdAt = payload.createdAt || new Date();
    this.updatedAt = payload.updatedAt || new Date();
  }

  public getAccountId(): string {
    return this.accountId;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getContactNo(): string {
    return this.contactNo;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
