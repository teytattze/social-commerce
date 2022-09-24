import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Accounts' })
export class TypeOrmAccount {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
