import { Router, Request, Response } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
    const { name, description } = req.body;

    categories.push({
        name,
        description,
    });

    return res.status(201).json(categories);
});

export default categoriesRoutes;
