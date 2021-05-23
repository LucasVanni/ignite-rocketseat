import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExistis = this.specificationsRepository.findByName(
            name
        );

        if (specificationAlreadyExistis) {
            throw new Error('Specification has been already exists');
        }

        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
