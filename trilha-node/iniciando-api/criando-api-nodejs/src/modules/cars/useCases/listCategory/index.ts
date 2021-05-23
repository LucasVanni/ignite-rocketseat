import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

export default () => {
    const categoriesRepository = new CategoriesRepository();

    const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

    const listCategoriesController = new ListCategoriesController(
        listCategoryUseCase
    );

    return listCategoriesController;
};
