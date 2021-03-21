import { Specification } from '../model/Specification';
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    findAll(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(Date.now()),
        });

        this.specifications.push(specification);
    }
}

export { SpecificationsRepository };
