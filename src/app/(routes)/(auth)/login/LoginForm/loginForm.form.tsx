import {  z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "El correo debe tener al menos 5 caracteres." })
    .max(50, { message: "Máximo 50 caracteres." }),
});