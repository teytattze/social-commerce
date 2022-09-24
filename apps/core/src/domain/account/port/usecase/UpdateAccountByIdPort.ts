import { AccountRole } from '../../entity/enum/AccountRole';

export interface UpdateAccountByIdPort {
  id: string;
  email?: string;
  password?: string;
  role?: AccountRole;
}
