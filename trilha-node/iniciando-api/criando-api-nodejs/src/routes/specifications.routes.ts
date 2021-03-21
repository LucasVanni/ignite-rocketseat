import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.get('/', (_req, res) => {
    const specifications = specificationsRepository.findAll();
    return res.status(200).json(specifications);
});

specificationsRoutes.post('/', (req, res) => {
    try {
        const { name, description } = req.body;

        const createSpecificationService = new CreateSpecificationService(
            specificationsRepository
        );

        createSpecificationService.execute({ name, description });

        return res.status(201).send();
    } catch (err) {
        return res.status(204).json({ error: err.message });
    }
});

export { specificationsRoutes };
