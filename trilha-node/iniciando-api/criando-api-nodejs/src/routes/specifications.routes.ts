import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationsRoutes = Router();

specificationsRoutes.get('/', (_req, res) => {
    return listSpecificationController.handle(_req, res);
});

specificationsRoutes.post('/', (req, res) => {
    return createSpecificationController.handle(req, res);
});

export { specificationsRoutes };
