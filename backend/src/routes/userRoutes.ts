import { Router } from "express";
import { CreateUserController } from "../modules/User/useCases/createUser/CreateUserController";
import { GetUserController } from "../modules/User/useCases/getUser/GetUserController";
import { GetUserByIdController } from "../modules/User/useCases/getUserById/GetUserByIdController";


const getUserByIdController = new GetUserByIdController();
const getUserController = new GetUserController();
const createUserControllers = new CreateUserController();
const userRoutes = Router()

userRoutes.post("/",createUserControllers.handle);
userRoutes.get("/",getUserController.handle);
userRoutes.get("/id",getUserByIdController.handle);


export {userRoutes}
