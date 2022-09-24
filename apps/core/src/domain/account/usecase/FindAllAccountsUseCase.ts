import { UseCase } from 'src/common/usecase/UseCase';
import { AccountUseCaseDto } from './dto/UserUseCaseDto';

export interface FindAllAccountsUseCase extends UseCase<void, AccountUseCaseDto[]> {}
