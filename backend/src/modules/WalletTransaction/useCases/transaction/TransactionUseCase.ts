import { prisma } from "../../../../prisma/client";
import { TransactionDTO } from "../../dtos/TransactionDTO";
const axios = require("axios");

export class TransactionUseCase {
  async execute({ payer, payee, value }: TransactionDTO) {
    const payerExists = await prisma.wallet.findFirst({
      where: { id: payer },
      include: { owner: true },
    });

    if (!payerExists) {
      throw new Error("Payer wallet not found");
    }

    const payeeExists = await prisma.wallet.findFirst({
      where: { id: payee },
    });

    if (!payeeExists) {
      throw new Error("Payee wallet not found");
    }

    if (payerExists.owner.type === "Retailer") {
      throw new Error("Retailers cannot send money");
    }

    if (payerExists.balance < value) {
      throw new Error(`The user ${payerExists.owner.nome} has insufficient balance`);
    }

    try {
      
      const authorizeResponse = await axios.get("https://util.devi.tools/api/v2/authorize");
      if (authorizeResponse.data.status !== "success") {
        throw new Error("Unauthorized transaction");
      }
      
      return await prisma.$transaction(async (tx) => {
        await tx.wallet.update({
          where: { id: payer },
          data: { balance: payerExists.balance - value },
        });

        await tx.wallet.update({
          where: { id: payee },
          data: { balance: payeeExists.balance + value },
        });

        return await tx.walletTransaction.create({
          data: {
            payeeId: payee,
            payerId: payer,
            value: value,
          },
        });
      });
    } catch (error) {
      throw new Error("Transaction error");
    }
  }
}
