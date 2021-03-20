import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.get('/', (_req: Request, res: Response) => {
    const categories = categoryRepository.findAll();

    return res.status(200).json(categories);
});

categoriesRoutes.post('/', (req: Request, res: Response) => {
    const { name, description } = req.body;

    const categoryAlreadyExists = categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
        return res
            .status(400)
            .json({ message: 'Category has already been created!' });
    }

    categoryRepository.create({ name, description });

    return res.status(201).send();
});

export default categoriesRoutes;
