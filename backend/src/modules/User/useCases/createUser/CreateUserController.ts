import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, cpfCnpj, password, type } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        try {
            const result = await createUserUseCase.execute({ name, email, cpfCnpj, password, type })
            return res.status(201).json(result)
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}