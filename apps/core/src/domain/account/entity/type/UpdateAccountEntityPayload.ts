import { AccountRole } from '../enum/AccountRole';

export interface UpdateAccountEntityPayload {
  email?: string;
  role?: AccountRole;
}
