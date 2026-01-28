import Logo from "@/components/Shared/Navbar/Logo";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Terms from "./login/Terms/Terms";
import LoginForm from "./login/LoginForm/loginForm"; 

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-[url('/loging2.jpg')] bg-cover bg-center opacity-40"
      />

      {/* LOGO */}
      <div className="relative z-20 px-8 py-6">
        <Logo />
      </div>

      {/* CONTENEDOR CENTRAL */}
      <div className="relative z-20 flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        
        <main className="
          bg-black/70
          px-10 py-8
          rounded-lg
          max-w-md
          w-full
          text-white
          backdrop-blur-sm
          shadow-2xl
          flex flex-col gap-5
        ">
          {/* TÍTULO */}
          <h1 className="text-3xl font-bold">
            Bienvenido a Netflix Clone
          </h1>

<LoginForm></LoginForm>

          {/* DESCRIPCIÓN */}
          <p className="text-sm text-gray-300">
            Crea una cuenta para comenzar a ver películas y series de Netflix
          </p>

          {/* BOTÓN */}
          <button className="mt-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
            Crear cuenta
          </button>

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 mt-2">
            <Checkbox id="terms" className="border-white" />
            <label htmlFor="terms" className="text-sm text-gray-300">
              Recuérdame
            </label>
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex gap-1 text-sm">
            <p className="text-gray-400">
              ¿Todavía no tienes Netflix?
            </p>
            <Link href="/register" className="text-white hover:underline">
              Suscríbete ahora
            </Link>
          </div>
          <Terms></Terms>
        </main>
      </div>
    </div>
  );
}
