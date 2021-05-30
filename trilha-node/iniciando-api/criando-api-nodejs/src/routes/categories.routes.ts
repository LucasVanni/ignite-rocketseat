import { Router, Request, Response } from 'express';
import multer from 'multer';

import { ImportCategoryController } from '../modules/cars/useCases/ImportCategory/ImportCategoryController';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoriesController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategory/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',
});

const listCategoriesController = new ListCategoriesController();
categoriesRoutes.get('/', listCategoriesController.handle);

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post('/', createCategoryController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRoutes.post(
    '/import',
    upload.single('file'),
    importCategoryController.handle
);

export { categoriesRoutes };
