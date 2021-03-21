import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error('Category has already been created!');
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
