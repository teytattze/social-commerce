import { AccountRole } from '@sc/core';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class TypeOrmAccount {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('enum', { enum: AccountRole, default: AccountRole.CUSTOMER })
  role: AccountRole;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
