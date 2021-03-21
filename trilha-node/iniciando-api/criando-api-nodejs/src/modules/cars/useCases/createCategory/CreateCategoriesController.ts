import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        try {
            const { name, description } = req.body;

            this.createCategoryUseCase.execute({ name, description });

            return res.status(201).send();
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }
}

export { CreateCategoryController };
