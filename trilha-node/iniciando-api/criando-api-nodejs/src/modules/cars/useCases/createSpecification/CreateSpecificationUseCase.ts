import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

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

export { CreateSpecificationUseCase };
