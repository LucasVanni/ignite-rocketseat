import CategoriesRepository from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const category = this.categoriesRepository.findByName(name);

        if (category) {
            throw new Error("Category has already been exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export default CreateCategoryService;
