import { Router } from "express";
import { CreateWalletController } from "../modules/Wallet/useCases/createWallet/CreateWalletController";
import { CreateDepositController } from "../modules/Wallet/useCases/Deposit/CreateDepositController";
import { GetWalletsController } from "../modules/Wallet/useCases/getWallet/GetWalletsController";
import { GetWalletByIdController } from "../modules/Wallet/useCases/getWalletById/GetWalletByIdController";

const getWalletsController = new GetWalletsController()
const getWalletByIdController = new GetWalletByIdController()
const createWalletController = new CreateWalletController();
const createDepositController = new CreateDepositController();

const walletRoutes = Router()

walletRoutes.post("/",createWalletController.handle)
walletRoutes.put("/deposit",createDepositController.handle)
walletRoutes.get("/",getWalletsController.handle)
walletRoutes.get("/id",getWalletByIdController.handle)

export {walletRoutes}
