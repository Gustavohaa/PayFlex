import { Router } from "express";
import { TransactionController } from "../modules/WalletTransaction/useCases/transaction/TransactionController"; 

const transactionController = new TransactionController();
const transactionRoutes = Router()

transactionRoutes.post("/", transactionController.handle)


export {transactionRoutes}
