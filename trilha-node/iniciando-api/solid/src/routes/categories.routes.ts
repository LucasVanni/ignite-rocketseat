import { Router } from "express";
import CategoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (_req, res) => {
    const categories = categoriesRepository.findAll();
    return res.json(categories);
});

categoriesRoutes.post("/", (req, res) => {
    try {
        const { name, description } = req.body;

        const createCategoryService = new CreateCategoryService(
            categoriesRepository
        );

        createCategoryService.execute({ name, description });

        return res.status(201).send();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});

export default categoriesRoutes;
