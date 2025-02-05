import { Router } from "express";
import { CreateWalletController } from "../modules/Wallet/useCases/createWallet/CreateWalletController";
import { CreateDepositController } from "../modules/Wallet/useCases/Deposit/CreateDepositController";

const createWalletController = new CreateWalletController();
const createDepositController = new CreateDepositController();

const walletRoutes = Router()

walletRoutes.post("/",createWalletController.handle)
walletRoutes.put("/deposit",createDepositController.handle)

export {walletRoutes}
