import { Category } from '../model/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    findAll(): Category[] {
        return this.categories;
    }

    // Responsável por cadastrar nossa categoria
    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(Date.now()),
        });

        this.categories.push(category);
    }

    findByName(name: string): Category {
        const categoryFound = this.categories.find(
            (category) => category.name === name
        );

        return categoryFound;
    }
}

export { CategoriesRepository };
