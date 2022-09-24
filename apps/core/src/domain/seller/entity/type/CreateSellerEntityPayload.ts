import { CreateEntityPayload } from 'src/common';

export interface CreateSellerEntityPayload extends CreateEntityPayload {
  accountId: string;
  name: string;
  contactNo: string;
  email: string;
  description: string;
}
