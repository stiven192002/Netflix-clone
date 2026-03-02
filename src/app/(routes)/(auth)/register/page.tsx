import Logo from "@/components/Shared/Navbar/Logo";
import Link from "next/link";
import  RegisterForm from "./RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      {/* FONDO */}
      <div className="absolute inset-0 bg-[url('/loging2.jpg')] bg-cover bg-center opacity-40" />

      {/* LOGO */}
      

      {/* CONTENEDOR CENTRAL */}
      <div className="relative z-20 flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        <main
          className="
            bg-black/70
            px-10 py-8
            rounded-lg
            max-w-md
            w-full
            text-white
            backdrop-blur-sm
            shadow-2xl
            flex flex-col gap-6
          "
        >
          <h1 className="text-3xl font-bold text-center">
            Crear cuenta
          </h1>

          <RegisterForm />

          <p className="text-sm text-center text-gray-400">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-white hover:underline">
              Inicia sesión
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
}
