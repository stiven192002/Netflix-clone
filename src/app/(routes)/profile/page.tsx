import { db } from "@/lib/db"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Profiles } from "./components/profile"

export default async function Profilepage() {

  const session = await auth()

  if (!session?.user?.id) {
    redirect("/login")
  }

  const userNetflix = await db.userNetflix.findMany({
    where: {
      userId: session.user.id
    }
  })

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 relative overflow-hidden">

      {/* glow decorativo */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <h1 className="text-white text-5xl font-bold mb-10 z-10">
        ¿Cual es tu perfil ?
      </h1>

      <Profiles users={userNetflix} />

    </div>
  )
}