import { Router } from "express";
import { TransactionController } from "../modules/WalletTransaction/useCases/transaction/TransactionController"; 
import { GetTransactionController } from "../modules/WalletTransaction/useCases/getTransaction/GetTransactionController"; 
import { GetTransactionByIdController } from "../modules/WalletTransaction/useCases/getTransactionById/GetTransactionByIdController";

const getTransactionByIdController = new GetTransactionByIdController()
const transactionController = new TransactionController();
const getTransactionController = new GetTransactionController();
const transactionRoutes = Router()

transactionRoutes.post("/", transactionController.handle)
transactionRoutes.get("/", getTransactionController.handle)
transactionRoutes.get("/id", getTransactionByIdController.handle)

export {transactionRoutes}
