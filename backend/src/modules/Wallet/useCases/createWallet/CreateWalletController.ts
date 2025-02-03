import { Request, Response } from "express";
import { CreateWalletUseCase } from "./CreateWalletUseCase";

export class CreateWalletController {
    async handle(req: Request, res: Response) {
        const { ownerId } = req.body;

        const createUserComonUseCase = new CreateWalletUseCase();

        try {
            const result = await createUserComonUseCase.execute({ ownerId })
            return res.status(201).json(result)
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}