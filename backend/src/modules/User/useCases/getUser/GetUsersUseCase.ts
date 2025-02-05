import { prisma } from "../../../../prisma/client";


export class GetUsersUseCase{
    async execute(){
        const users = await prisma.user.findMany({
            include:{
                wallets:true
            }
        })

        if(!users){
            throw new Error("No user found")
        }
        return users;
    }
}