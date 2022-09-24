import { UseCase } from 'src/common/usecase/UseCase';
import { AccountUseCaseDto } from './dto/UserUseCaseDto';

export interface FindAccountByEmailUseCase extends UseCase<string, AccountUseCaseDto> {}
