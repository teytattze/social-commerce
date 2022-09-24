import { AccountRole } from '../../entity/enum/AccountRole';

export interface CreateAccountPort {
  email: string;
  password: string;
  role: AccountRole;
}
