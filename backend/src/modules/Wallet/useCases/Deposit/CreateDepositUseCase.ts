import { prisma } from "../../../../prisma/client";
import { CreateDepositDTO } from "../dtos/CreateDepositDTO";

export class CreateDepositUseCase {
    async execute({ balance, id }: CreateDepositDTO) {
        const walletExists = await prisma.wallet.findFirst({
            where: { id: id },
        });

        if (!walletExists) {
            throw new Error("Carteira não encontrada");
        }

        if (balance <= 0) {
            throw new Error("Valor do depósito deve ser maior do que 0");
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