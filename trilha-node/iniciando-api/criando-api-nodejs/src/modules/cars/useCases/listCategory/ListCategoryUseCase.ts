import { Category } from '../../model/Category';
import { ICreateCategoriesRepository } from '../../repositories/ICreateCategoriesRepository';

class ListCategoryUseCase {
    constructor(private categoriesRepository: ICreateCategoriesRepository) {}

    execute(): Category[] {
        return this.categoriesRepository.findAll();
    }
}

export { ListCategoryUseCase };
