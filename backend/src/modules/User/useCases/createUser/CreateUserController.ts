import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidation } from "../../../../validations/CreateUserValidation";

export class CreateUserController {
    async handle(req: Request, res: Response) {

        const validatedData = CreateUserValidation.safeParse(req.body);

        if(!validatedData.success){
            const errors = validatedData.error.issues.map((issue) => issue.message);
            return res.status(400).json({errors})
        }

        const createUserUseCase = new CreateUserUseCase();
        try {
            const result = await createUserUseCase.execute(validatedData.data)
            return res.status(201).json(result)
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}