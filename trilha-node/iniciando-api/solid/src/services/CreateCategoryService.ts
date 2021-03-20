import CategoriesRepository from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const category = this.categoriesRepository.findByName(name);

        if (category) {
            throw new Error("Category has already been exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export default CreateCategoryService;
