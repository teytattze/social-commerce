import { CreateEntityPayload } from 'src/common';
import { CreateStoreAddressEntityPayload } from './CreateStoreAddressEntityPayload';

export interface CreateStoreEntityPayload extends CreateEntityPayload {
  sellerId: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  website: string;
  address?: CreateStoreAddressEntityPayload;
}
