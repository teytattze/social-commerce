import { AccountRole } from '@sc/core';

export class HttpRestApiCreateAccountBody {
  email: string;
  password: string;
  role: AccountRole;
}
