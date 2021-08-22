import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new AppError('Token missing', 401);
    }

    const [, token] = authorization.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            '4c3186dbb11864c92d1652cb033d4b83'
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists', 401);
        }

        next();
    } catch (err) {
        throw new AppError('Invalid token!', 401);
    }
}
