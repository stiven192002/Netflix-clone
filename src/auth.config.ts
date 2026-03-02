import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { signInSchema } from "./lib/zod";
import { getUserByEmail } from "./Data/user";

const config = {
  providers: [
    Credentials({
      async authorize(credentials) {
        // ✅ Validación con Zod v3
        const parsed = signInSchema.safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const { email, password } = parsed.data;

        // ✅ Buscar usuario
        const user = await getUserByEmail(email);

        if (!user || !user.password) {
          return null;
        }

        // ✅ Comparar password
        const isPasswordValid = await bcrypt.compare(
          password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        // ✅ Retornar usuario (mínimo requerido)
        return {
          id: user.id,
          email: user.email,
          name: user.name ?? null,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;

export default config;
