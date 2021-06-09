import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password, drive_license } = req.body;

            const createUserUseCase = container.resolve(CreateUserUseCase);

            await createUserUseCase.execute({
                name,
                email,
                password,
                drive_license,
            });

            return res.status(201).send();
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }
}

export { CreateUserController };
