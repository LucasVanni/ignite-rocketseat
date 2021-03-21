import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
