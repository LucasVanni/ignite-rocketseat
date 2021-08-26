import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findById(id: string): Promise<User> {
        return this.repository.findOne(id);
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ email });
    }

    async create({
        name,
        email,
        drive_license,
        password,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            drive_license,
            password,
            avatar,
            id,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };
