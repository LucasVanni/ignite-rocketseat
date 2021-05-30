import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
    async handle(_req: Request, res: Response): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase);

        const categories = await listCategoryUseCase.execute();

        return res.status(200).json(categories);
    }
}

export { ListCategoriesController };
