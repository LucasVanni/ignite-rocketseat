import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (_req: Request, res: Response) => {
    const categories = categoriesRepository.findAll();

    return res.status(200).json(categories);
});

categoriesRoutes.post('/', (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;

        const createCategoryService = new CreateCategoryService(
            categoriesRepository
        );

        createCategoryService.execute({ name, description });

        return res.status(201).send();
    } catch (err) {
        return res.status(400).json({ message: '' });
    }
});

export { categoriesRoutes };
