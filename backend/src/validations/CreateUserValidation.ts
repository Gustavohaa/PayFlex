import {z} from "zod";

const cpfCnpjRegex = /^(\d{3}\.\d{3}\.\d{3}\-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})$/;

export const CreateUserValidation = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must have at least 6 characters"),
  cpfCnpj: z.string().regex(cpfCnpjRegex, "Invalid CPF/CNPJ format"),
  type: z.enum(['Common', 'Retailer']),
});

