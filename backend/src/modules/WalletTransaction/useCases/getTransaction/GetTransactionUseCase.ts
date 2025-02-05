import { prisma } from "../../../../prisma/client";


export class GetTransactionUseCase{
    async execute(){
        const walletTransaction = await prisma.walletTransaction.findMany()

        if(!walletTransaction){
            throw new Error("No wallets registred")
        }
        return walletTransaction
    }
}