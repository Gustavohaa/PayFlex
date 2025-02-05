import { prisma } from "../../../../prisma/client";
import { GetTransactionByIdDTO } from "../../dtos/GetTransactionByIdDTO";

export class GetTransactionByIdUseCase {
    async execute({ id }: GetTransactionByIdDTO) {

        const getTransactionById = await prisma.walletTransaction.findUnique({
            where: { id }
        }
        );
        if(!getTransactionById){
            throw new Error("User has no transactions")
        }
        return getTransactionById;
    }
}