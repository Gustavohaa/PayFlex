import { prisma } from "../../../../prisma/client";
import { CreateDepositDTO } from "../../dtos/CreateDepositDTO";

export class CreateDepositUseCase {
    async execute({ balance, id }: CreateDepositDTO) {
        const walletExists = await prisma.wallet.findFirst({
            where: { id: id },
        });

        if (!walletExists) {
            throw new Error("Wallet not found");
        }

        if (balance <= 0) {
            throw new Error("The deposit value must be greater than zero");
        }

        const updatedBalance = walletExists.balance + balance;

        const wallet = await prisma.wallet.update({
            where: { id: id },
            data: {
                balance: updatedBalance,
            },
        });

        return wallet;
    }
}