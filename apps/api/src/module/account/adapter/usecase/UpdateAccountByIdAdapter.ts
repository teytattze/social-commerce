import { AccountRole, Optional, UpdateAccountByIdPort } from '@sc/core';

export class UpdateAccountByIdAdapter implements UpdateAccountByIdPort {
  id: string;
  email: Optional<string>;
  password: Optional<string>;
  role: Optional<AccountRole>;

  public static new(payload: UpdateAccountByIdPort): UpdateAccountByIdAdapter {
    const adapter: UpdateAccountByIdAdapter = new UpdateAccountByIdAdapter();
    adapter.id = payload.id;
    adapter.email = payload.email;
    adapter.password = payload.password;
    adapter.role = payload.role;
    return adapter;
  }
}
