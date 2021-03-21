import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) {}

    handle(_req: Request, res: Response): Response {
        const categories = this.listCategoryUseCase.execute();

        return res.status(200).json(categories);
    }
}

export { ListCategoriesController };
