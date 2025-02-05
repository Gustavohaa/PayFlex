import { Request, Response } from "express";
import { GetWalletsUseCase } from "./GetWalletsUseCase";

export class GetWalletsController {
    async handle(req: Request, res: Response) {

        const getWalletUseCase = new GetWalletsUseCase();
        try {
            const result = await getWalletUseCase.execute()
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}