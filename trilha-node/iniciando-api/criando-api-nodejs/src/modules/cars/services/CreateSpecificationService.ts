import { SpecificationsRepository } from '../repositories/SpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExistis = this.specificationsRepository.findByName(
            name
        );

        if (specificationAlreadyExistis) {
            throw new Error('Specification has been already exists');
        }

        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationService };
