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
            throw new Error("Usuário não existe")
        }

        if(userExists.wallets.length > 0){
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