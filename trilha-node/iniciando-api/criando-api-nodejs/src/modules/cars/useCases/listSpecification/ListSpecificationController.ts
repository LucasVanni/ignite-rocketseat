import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    async handle(_req: Request, res: Response) {
        const specifications = await this.listSpecificationUseCase.execute();
        return res.status(200).json(specifications);
    }
}

export { ListSpecificationController };
