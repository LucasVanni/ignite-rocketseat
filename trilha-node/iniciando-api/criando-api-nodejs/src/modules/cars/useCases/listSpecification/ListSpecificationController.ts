import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
    async handle(_req: Request, res: Response) {
        const listSpecificationUseCase = container.resolve(
            ListSpecificationUseCase
        );

        const specifications = await listSpecificationUseCase.execute();
        return res.status(200).json(specifications);
    }
}

export { ListSpecificationController };
