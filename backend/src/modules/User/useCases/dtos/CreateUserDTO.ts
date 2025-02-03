import {Type} from '@prisma/client';

export interface CreateUserDTO{
    name: string;
    email:string;
    cpfCnpj:string;
    password:string;
    type: Type;  
}