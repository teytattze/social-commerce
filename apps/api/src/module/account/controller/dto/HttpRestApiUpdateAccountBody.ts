import { AccountRole } from '@sc/core';

export class HttpRestApiUpdateAccountBody {
  email?: string;
  password?: string;
  role?: AccountRole;
}
