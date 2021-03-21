import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
// import { ImportCategoryRepository } from '../../repositories/implementations/ImportCategoryRepository';

// const importCategoryRepository = new ImportCategoryRepository();

const importCategoryUseCase = new ImportCategoryUseCase();

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
