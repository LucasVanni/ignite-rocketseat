import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationsRepository
);

const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
);

export { listSpecificationController };
