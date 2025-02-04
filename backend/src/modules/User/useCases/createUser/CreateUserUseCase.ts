import { prisma  } from "../../../../prisma/client"; 
import { CreateUserDTO } from "../../dtos/CreateUserDTO";


export class CreateUserUseCase{
    async execute ({name,email,cpfCnpj,password,type}: CreateUserDTO){

        const cpfExists = await prisma.user.findFirst(
            {
                where: {cpfCnpj}
            }
        );

        if(cpfExists){
            throw new Error("Esse cpf já foi cadastrado")
        }

        const emailExists = await prisma.user.findFirst(
            {
                where: {email}
            }
        );

        if(emailExists){
            throw new Error("Esse e-mail já foi cadastrado")
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