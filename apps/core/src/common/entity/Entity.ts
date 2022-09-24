import { EntityIdNotFoundException } from '../exception/entity/EntityIdNotFoundException';
import { EntityValidationFailedException } from '../exception/entity/EntityValidationFailedException';
import { Nullable, Optional } from '../type/CommonTypes';
import { ClassValidator } from '../validator/ClassValidator';
import { ClassValidatorDetails } from '../validator/type/ClassValidatorDetails';

export class Entity<TIdentifier extends string | number> {
  protected id: Optional<TIdentifier>;
  protected createdAt: Date;
  protected updatedAt: Date;

  public getId(): TIdentifier {
    if (typeof this.id === 'undefined') throw new EntityIdNotFoundException();
    return this.id;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public updateTimestamp(): void {
    this.updatedAt = new Date();
  }

  public async validate(): Promise<void> {
    const details: Nullable<ClassValidatorDetails> = await ClassValidator.validate(this);
    if (details) throw new EntityValidationFailedException();
  }
}
