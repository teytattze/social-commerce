import { Entity } from 'src/common';
import { v4 } from 'uuid';
import { CreateAddressEntityPayload } from './type/CreateAddressEntityPayload';

export class Address extends Entity<string> {
  private line1: string;
  private line2: string;
  private line3: string;
  private city: string;
  private state: string;
  private country: string;
  private postalCode: string;

  constructor(payload: CreateAddressEntityPayload) {
    super();

    this.id = payload.id || v4();
    this.line1 = payload.line1;
    this.line2 = payload.line2 || '';
    this.line3 = payload.line3 || '';
    this.city = payload.city;
    this.state = payload.state;
    this.country = payload.country;
    this.postalCode = payload.postalCode;
    this.createdAt = payload.createdAt || new Date();
    this.updatedAt = payload.updatedAt || new Date();
  }

  public getLine1(): string {
    return this.line1;
  }

  public getLine2(): string {
    return this.line2;
  }

  public getLine3(): string {
    return this.line3;
  }

  public getCity(): string {
    return this.city;
  }

  public getState(): string {
    return this.state;
  }

  public getCountry(): string {
    return this.country;
  }

  public getPostalCode(): string {
    return this.postalCode;
  }
}
