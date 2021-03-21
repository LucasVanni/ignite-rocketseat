import { Specification } from '../../model/Specification';
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: ISpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance() {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
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
