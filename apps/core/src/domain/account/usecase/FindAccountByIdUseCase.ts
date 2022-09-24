import { UseCase } from 'src/common/usecase/UseCase';
import { AccountUseCaseDto } from './dto/UserUseCaseDto';

export interface FindAccountByIdUseCase extends UseCase<string, AccountUseCaseDto> {}
