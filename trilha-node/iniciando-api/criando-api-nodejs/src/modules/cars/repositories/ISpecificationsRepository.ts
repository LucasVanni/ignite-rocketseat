import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findAll(): Specification[];
    findByName(name: string): Specification;
    create({ name, description }: ICreateSpecificationDTO): void;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
