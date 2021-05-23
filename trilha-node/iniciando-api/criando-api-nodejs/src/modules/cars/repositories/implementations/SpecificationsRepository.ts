import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async findAll(): Promise<Specification[]> {
        return this.repository.find();
    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.findOne({ where: { name } });
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }
}

export { SpecificationsRepository };
