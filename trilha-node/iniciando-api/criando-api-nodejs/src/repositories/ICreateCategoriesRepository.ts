import { Category } from '../model/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICreateCategoriesRepository {
    findAll(): Category[];
    findByName(name: string): Category;
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICreateCategoriesRepository, ICreateCategoryDTO };
