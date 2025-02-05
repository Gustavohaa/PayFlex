import { Request, Response } from "express";
import { GetTransactionByIdUseCase } from "./GetTransactionByIdUseCase";

export class GetTransactionByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const getTransactionByIdUseCase = new GetTransactionByIdUseCase()

        try {
            const result = await getTransactionByIdUseCase.execute({ id })
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}