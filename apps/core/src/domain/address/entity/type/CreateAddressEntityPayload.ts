import { CreateEntityPayload } from 'src/common';

export interface CreateAddressEntityPayload extends CreateEntityPayload {
  line1: string;
  line2?: string;
  line3?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}
