import { UseCase } from 'src/common/usecase/UseCase';
import { UpdateAccountByIdPort } from '../port/usecase/UpdateAccountByIdPort';
import { AccountUseCaseDto } from './dto/UserUseCaseDto';

export interface UpdateAccountByIdUseCase
  extends UseCase<UpdateAccountByIdPort, AccountUseCaseDto> {}
