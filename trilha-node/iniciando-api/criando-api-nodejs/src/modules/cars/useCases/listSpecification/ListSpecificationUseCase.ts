import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    async execute(): Promise<Specification[]> {
        return this.specificationsRepository.findAll();
    }
}

export { ListSpecificationUseCase };
