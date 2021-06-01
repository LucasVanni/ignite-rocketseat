import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// ! Categories
// Passamos para o registerSingleton a interface
container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository
);

// ! Specifications
container.registerSingleton<ISpecificationsRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
);

// ! Users
container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);
