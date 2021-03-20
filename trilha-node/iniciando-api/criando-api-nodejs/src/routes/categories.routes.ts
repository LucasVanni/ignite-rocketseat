import { Router, Request, Response } from 'express';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req: Request, res: Response) => {
    const { name, description } = req.body;

    categoryRepository.create({ name, description });

    return res.status(201).send();
});

export default categoriesRoutes;
