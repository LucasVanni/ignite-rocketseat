import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoriesController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };
