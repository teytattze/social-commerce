import { Address } from 'src/domain/address';
import { CreateStoreAddressEntityPayload } from './type/CreateStoreAddressEntityPayload';

export class StoreAddress extends Address {
  constructor(payload: CreateStoreAddressEntityPayload) {
    super(payload);
  }
}
