import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { Request, Response } from "express";

export class GetUserByIdController{
    async handle(req: Request, res: Response){
        const {id} = req.body;

        const getUserByIdUseCase = new GetUserByIdUseCase();

        try{
            const result = await getUserByIdUseCase.execute({id});
            return res.status(200).json(result)

        }catch(error: any){
            return res.status(400).json({error: error.message})
        }
    }

}