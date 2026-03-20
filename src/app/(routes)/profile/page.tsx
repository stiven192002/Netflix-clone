import { db } from "@/lib/db"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Profilepage() {

  const session = await auth()

  if (!session?.user?.id) {
    redirect("/login")
  }

  const userNetflix = await db.userNetflix.findMany({
    where: {
      userId: session?.user?.id
    }
  })
  console.log(userNetflix)

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      
      <h1 className="text-white text-5xl font-bold mb-10">
        ¿Quién eres? Elige tu perfil
      </h1>

      <pre className="text-white">
        {JSON.stringify(userNetflix, null, 2)}
      </pre>

    </div>
  )
}