import { UseCase } from 'src/common/usecase/UseCase';
import { CreateAccountPort } from '../port/usecase/CreateAccountPort';
import { AccountUseCaseDto } from './dto/UserUseCaseDto';

export interface CreateAccountUseCase extends UseCase<CreateAccountPort, AccountUseCaseDto> {}
