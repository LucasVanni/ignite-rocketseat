import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const categoriesRepository = new CategoriesRepository();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
    listCategoryUseCase
);

export { listCategoriesController };
