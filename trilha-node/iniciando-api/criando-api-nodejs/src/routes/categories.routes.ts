import { Router, Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (req: Request, res: Response) => {
    const { name, description } = req.body;

    const category = {
        id: uuidV4(),
        name,
        description,
    };

    categories.push(category);

    return res.status(201).json(categories);
});

export default categoriesRoutes;
