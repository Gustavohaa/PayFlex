import { Request, Response } from "express";
import { GetWalletByIdUseCase } from "./GetWalletByIdUseCase";

export class GetWalletByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const getWalletByIdUseCase = new GetWalletByIdUseCase()

        try {
            const result = await getWalletByIdUseCase.execute({ id })
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}

