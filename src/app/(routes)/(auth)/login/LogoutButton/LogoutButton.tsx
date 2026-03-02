"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { toast } from "sonner"

export default function LogoutButton() {

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login", // a donde quieres enviarlo
    })

    toast.success("Sesión cerrada correctamente")
  }

  return (
    <Button
      variant="destructive"
      onClick={handleLogout}
      className="flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      Cerrar sesión
    </Button>
  )
}