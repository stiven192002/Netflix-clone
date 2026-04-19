import { z } from "zod"

export const formSchema = z.object({
  profileName: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50"),
  avatarUrl: z.enum([
    "/usuarios/christian.jpg",
    "/usuarios/christopher.jpg",
    "/usuarios/stefa.jpg",
    "/usuarios/vicky.jpg",
  ]),
})