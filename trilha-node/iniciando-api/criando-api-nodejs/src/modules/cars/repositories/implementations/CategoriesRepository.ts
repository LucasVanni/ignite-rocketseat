import { Category } from '../../model/Category';
import {
    ICreateCategoryDTO,
    ICategoriesRepository,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
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
