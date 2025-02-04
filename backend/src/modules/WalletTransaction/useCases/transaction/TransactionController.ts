import { Request, Response } from "express";
import { TransactionUseCase } from "./TransactionUseCase";

export class TransactionController {
    async handle(req: Request, res: Response) {
        const { payer, payee, value } = req.body;

        const transactionUseCase = new TransactionUseCase();

        try {
            const result = await transactionUseCase.execute({ payer, payee, value })
            return res.status(201).json(result)
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}