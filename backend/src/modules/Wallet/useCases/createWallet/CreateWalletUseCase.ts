import { prisma} from "../../../../prisma/client"; 
import { CreateWalletDTO } from "../../dtos/CreateWalletDTO";
import { PrismaClient } from '@prisma/client'

const prismaC = new PrismaClient()

export class CreateWalletUseCase{
    async execute ({ownerId}: CreateWalletDTO){

        const userExists = await prisma.wallet.findFirst(
            {
                where: {id: ownerId}
            }
        );

        if(userExists){
            throw new Error("Carteira já existe")
        }

        const wallet = await prisma.wallet.create(
            {
                data:{
                    ownerId
                }
            }
        )
        return wallet;
    }
}