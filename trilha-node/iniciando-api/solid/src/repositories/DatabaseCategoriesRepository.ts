import Category from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class DatabaseCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    findAll(): Category[] {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export default DatabaseCategoriesRepository;
