import { CreateAccountPort } from '@sc/core';

export class CreateAccountAdapter implements CreateAccountPort {
  email: string;
  password: string;

  public static new(payload: CreateAccountPort): CreateAccountAdapter {
    const adapter: CreateAccountAdapter = new CreateAccountAdapter();
    adapter.email = payload.email;
    adapter.password = payload.password;
    return adapter;
  }
}
