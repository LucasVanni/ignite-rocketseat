import { Router, Request, Response } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import multer from 'multer';
import { importCategoryController } from '../modules/cars/useCases/ImportCategory';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',
});

categoriesRoutes.get('/', (req: Request, res: Response) => {
    return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/', (req: Request, res: Response) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.post(
    '/import',
    upload.single('file'),
    (req: Request, res: Response) => {
        return importCategoryController.handle(req, res);
    }
);

export { categoriesRoutes };
