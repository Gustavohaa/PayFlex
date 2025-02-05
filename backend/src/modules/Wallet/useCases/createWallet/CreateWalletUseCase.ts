import { prisma} from "../../../../prisma/client"; 
import { CreateWalletDTO } from "../../dtos/CreateWalletDTO";


export class CreateWalletUseCase{
    async execute ({ownerId}: CreateWalletDTO){

        const userExists = await prisma.user.findFirst(
            {
                where: {id: ownerId},
                include:{
                    wallets:true
                }
            }
        );

        if(!userExists){
            throw new Error("User does not exist")
        }

        if(userExists.wallets.length > 0){
            throw new Error(`User: ${userExists.nome} already has a wallet`) 
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