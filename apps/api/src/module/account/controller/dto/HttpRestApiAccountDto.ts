import { AccountRole } from '@sc/core';

export class HttpRestApiAccountDto {
  id: string;
  email: string;
  password: string;
  role: AccountRole;
  createdAt: Date;
  updatedAt: Date;
}
