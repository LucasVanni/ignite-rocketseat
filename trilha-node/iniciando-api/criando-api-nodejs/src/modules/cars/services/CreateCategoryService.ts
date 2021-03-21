import { ICreateCategoriesRepository } from '../repositories/ICreateCategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoryRepository: ICreateCategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error('Category has already been created!');
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryService };
