import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findAll(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification>;
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
