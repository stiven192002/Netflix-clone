"use server";

import { signIn } from "@/auth";
import { signInSchema } from "@/lib/zod";
import { z } from "zod";
import { AuthError } from "next-auth";

export const login = async (
  values: z.infer<typeof signInSchema>
) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/profile",
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "Invalid email or password" };
      }

      return { error: "Something went wrong" };
    }

    throw error;
  }
};
