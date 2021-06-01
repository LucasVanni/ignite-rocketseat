import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ email });
    }

    async create({
        name,
        username,
        email,
        drive_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            drive_license,
            password,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };
