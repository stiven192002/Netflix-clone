import Logo from "@/components/Shared/Navbar/Logo";
import { Toaster } from "sonner";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* IMAGEN DE FONDO */}
      <div className="absolute inset-0 bg-[url('/loging2.jpg')] bg-cover bg-center opacity-40" />

      {/* LOGO */}
      <div className="relative z-20 px-8 py-6">
        <Logo />
      </div>

      {/* CONTENIDO DE REGISTER */}
      <div className="relative z-20 flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        {children}
        <Toaster />
      </div>
    </div>
  );
}
