import { prisma } from "../../../../prisma/client";


export class GetWalletsUseCase {
    async execute() {
        const wallets = await prisma.wallet.findMany({
            include: {
                transactionsSent: true,
                transactionsReceived: true
            }
        });

        if (!wallets) {
            throw new Error("No wallet found")
        }
        return wallets;
    }
}