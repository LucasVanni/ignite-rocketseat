import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export default () => {
    const specificationsRepository = new SpecificationsRepository();

    const createSpecificationService = new CreateSpecificationUseCase(
        specificationsRepository
    );

    const createSpecificationController = new CreateSpecificationController(
        createSpecificationService
    );

    return createSpecificationController;
};
