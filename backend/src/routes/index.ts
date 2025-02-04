import { Router } from "express";

import { userRoutes } from "./userRoutes";
import { walletRoutes } from "./walletRoutes";
import { transactionRoutes } from "./transactionRoutes";
const routes = Router();

routes.use("/user",userRoutes)
routes.use("/wallet",walletRoutes)
routes.use("/transaction",transactionRoutes)

export {routes}