import { Entity, Nullable } from 'src/common';
import { v4 } from 'uuid';
import { StoreAddress } from './StoreAddress';
import { CreateStoreEntityPayload } from './type/CreateStoreEntityPayload';

export class Store extends Entity<string> {
  private sellerId: string;
  private name: string;
  private description: string;
  private email: string;
  private phone: string;
  private website: string;
  private address: Nullable<StoreAddress>;

  constructor(payload: CreateStoreEntityPayload) {
    super();

    this.id = payload.id || v4();
    this.sellerId = payload.sellerId;
    this.name = payload.name;
    this.description = payload.description;
    this.email = payload.email;
    this.phone = payload.phone;
    this.website = payload.website;
    this.address = payload.address ? new StoreAddress(payload.address) : null;
    this.createdAt = payload.createdAt || new Date();
    this.updatedAt = payload.updatedAt || new Date();
  }

  public getSellerId(): string {
    return this.sellerId;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getWebsite(): string {
    return this.website;
  }

  public getAddress(): Nullable<StoreAddress> {
    return this.address;
  }
}
