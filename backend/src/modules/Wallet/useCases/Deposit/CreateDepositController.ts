import { Request, Response } from "express";
import { CreateDepositUseCase } from "./CreateDepositUseCase";

export class CreateDepositController {
    async handle(req: Request, res: Response) {
        const { balance, id } = req.body;

        const createDepositUseCase = new CreateDepositUseCase();

        try {
            const result = await createDepositUseCase.execute({ balance, id });
            return res.status(201).json(result); 
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}