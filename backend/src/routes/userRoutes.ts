import { Router } from "express";
import { CreateUserController } from "../modules/User/useCases/createUser/CreateUserController";


const createUserControllers = new CreateUserController();
const userRoutes = Router()

userRoutes.post("/",createUserControllers.handle)


export {userRoutes}
