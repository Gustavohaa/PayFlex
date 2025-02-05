import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

export class GetUserController{
    async handle(req: Request, res: Response){

        const getUsersUseCase = new GetUsersUseCase();

        try{
            const result = await getUsersUseCase.execute()
            return res.status(200).json(result)
        }catch(error:any){
            return res.status(400).json({error: error.message})
        }
    }
}