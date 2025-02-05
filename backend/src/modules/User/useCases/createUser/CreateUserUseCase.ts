import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";


export class CreateUserUseCase {
    async execute({ name, email, cpfCnpj, password, type }: CreateUserDTO) {

        const cpfExists = await prisma.user.findFirst(
            {
                where: { cpfCnpj }
            }
        );

        if (cpfExists) {
            throw new Error("CPF has already been registered")
        }

        const emailExists = await prisma.user.findFirst(
            {
                where: { email }
            }
        );

        if (emailExists) {
            throw new Error("email has already been registered")
        }

        const user = await prisma.user.create(
            {
                data: {
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