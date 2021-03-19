import { Router, Request, Response } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (req: Request, res: Response) => {
    const { name, description } = req.body;

    const category = new Category();

    Object.assign(category, {
        name,
        description,
        created_at: new Date(Date.now()),
    });

    categories.push(category);

    return res.status(201).json(categories);
});

export default categoriesRoutes;
