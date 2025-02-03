import { Router } from "express";

import { userRoutes } from "./userRoutes";
import { walletRoutes } from "./walletRoutes";
const routes = Router();

routes.use("/user",userRoutes)
routes.use("/wallet",walletRoutes)

export {routes}