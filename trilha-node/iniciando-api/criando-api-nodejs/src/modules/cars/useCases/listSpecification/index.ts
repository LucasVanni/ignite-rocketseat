import { SpecificationsRepository } from '../../repositories/SpecificationsRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();

const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationsRepository
);

const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
);

export { listSpecificationController };
