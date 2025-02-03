import { prisma  } from "../../../../prisma/client"; 
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { PrismaClient } from '@prisma/client'

const prismaC = new PrismaClient()

export class CreateUserUseCase{
    async execute ({name,email,cpfCnpj,password,type}: CreateUserDTO){

        const userExists = await prisma.user.findFirst(
            {
                where: {cpfCnpj}
            }
        );

        if(userExists){
            throw new Error("Usuario já existe")
        }

        const user = await prisma.user.create(
            {
                data:{
                    nome: name,
                    email: email,
                    cpfCnpj: cpfCnpj,
                    password: password,
                    type: type
                }
            }
        )
        return user;
    }
}