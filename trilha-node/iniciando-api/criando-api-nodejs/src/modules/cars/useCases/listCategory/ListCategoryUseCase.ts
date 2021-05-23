import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute(): Promise<Category[]> {
        return this.categoriesRepository.findAll();
    }
}

export { ListCategoryUseCase };
