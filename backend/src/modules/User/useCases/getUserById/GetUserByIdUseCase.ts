import { prisma } from "../../../../prisma/client";
import { GetUserByIdDTO } from "../../dtos/GetUserByIdDTO";

export class GetUserByIdUseCase {
    async execute({ id }: GetUserByIdDTO) {
        const idExists = await prisma.user.findUnique(
            {
                where: { id },
                include:{
                    wallets:true
                }     
            }
        );

        if(!idExists){
            throw new Error("User not found")
        }

        return idExists
    }
}