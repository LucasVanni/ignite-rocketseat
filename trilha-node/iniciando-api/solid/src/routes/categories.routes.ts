import { Router } from "express";
import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (_req, res) => {
    const categories = categoriesRepository.findAll();
    return res.json(categories);
});

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const category = categoriesRepository.findByName(name);

    if (category) {
        return res
            .status(400)
            .json({ message: "Category has already been exists" });
    }

    categoriesRepository.create({ name, description });

    return res.status(201).send();
});

export default categoriesRoutes;
