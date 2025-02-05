import { Request, Response } from "express";
import { GetTransactionUseCase } from "./GetTransactionUseCase";

export class GetTransactionController{
    async handle(req: Request, res: Response){

        const getTransactionUseCase = new GetTransactionUseCase();

        try{
            const result = await getTransactionUseCase.execute()
            return res.status(200).json(result)
        }catch(error:any){
            return res.status(400).json({error: error.message})
        }

    }
}