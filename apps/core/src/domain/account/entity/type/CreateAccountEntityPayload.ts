import { CreateEntityPayload } from 'src/common';
import { AccountRole } from '../enum/AccountRole';

export interface CreateAccountEntityPayload extends CreateEntityPayload {
  email: string;
  password: string;
  role: AccountRole;
}
