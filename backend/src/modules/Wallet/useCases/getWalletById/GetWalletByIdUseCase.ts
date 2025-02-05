import { prisma } from "../../../../prisma/client";
import { GetWalletByIdDTO } from "../../dtos/GetWalletByIdDTO";

export class GetWalletByIdUseCase{
    async execute({id}: GetWalletByIdDTO){

        const getWalletById = await prisma.wallet.findUnique({
            where:{id},
            include:{
                transactionsSent:true,
                transactionsReceived:true
            }
        }
    );
    if(!getWalletById){
        throw new Error("No wallets found for this user")
    }
    return getWalletById
}
}