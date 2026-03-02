import { object, string } from "zod";

export const signInSchema = object({
  email: string()
    .min(1, "email is required")
    .email("invalid email address"),

  password: string()
    .min(1, "password is required")
    .min(6, "password must be at least 6 characters long"),
});
