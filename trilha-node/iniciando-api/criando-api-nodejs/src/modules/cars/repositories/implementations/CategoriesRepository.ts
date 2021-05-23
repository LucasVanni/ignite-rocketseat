import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import {
    ICreateCategoryDTO,
    ICategoriesRepository,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async findAll(): Promise<Category[]> {
        const categories = await this.repository.find();

        return categories;
    }

    // Responsável por cadastrar nossa categoria
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }

    async findByName(name: string): Promise<Category> {
        const categoryFound = await this.repository.findOne({
            where: { name },
        });

        return categoryFound;
    }
}

export { CategoriesRepository };
