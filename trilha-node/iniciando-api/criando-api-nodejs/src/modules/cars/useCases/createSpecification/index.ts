import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationService = new CreateSpecificationUseCase(
    specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationService
);

export { createSpecificationController };
