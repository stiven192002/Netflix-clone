"use client"

import { Button } from "@/components/ui/button"
import { ProfilesProps } from "./profiles.types"
import { Addprofile } from "./Addprofile"
import { avatars } from "@/app/(routes)/profile/components/FormAddProfile/FormAddProfile.data"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { UserNetflix } from "@prisma/client"
import { useCurrentUser } from "@/hooks/use-current-user"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function Profiles(props: ProfilesProps) {
  const { users } = props
  console.log("USERS:", users, Array.isArray(users))

  const { changeCurrentUser, currentUser } = useCurrentUser()
  console.log(currentUser)

  const router = useRouter()

  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [isManaging, setIsManaging] = useState(false)

  const onClickUser = (user: UserNetflix) => {
    changeCurrentUser(user)
    console.log("Usuario seleccionado:", user)
  }

  const deleteUser = async (userIdNetflix: string) => {
    try {
      const response = await axios.delete("/api/UserNetflix", {
        data: { userIdNetflix },
      })

      if (response.status === 200) {
        toast.success("Perfil eliminado correctamente")
        router.refresh()
        setSelectedUser(null)
        setIsManaging(false)
      } else {
        toast.error("No se pudo eliminar el perfil")
      }
    } catch (error) {
      console.log(error)
      toast.error("OMG HA OCURRIDO UN ERROR")
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 px-4 w-full">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-4 md:gap-6 justify-center">

        {users.map((user, index) => {
          const isSelected = selectedUser === user.id

          return (
            <div
              key={user.id}
              className="flex flex-col items-center gap-3 cursor-pointer group relative"
              onClick={() => {
                onClickUser(user)
              }}
            >

              <div className="relative">

                <img
                  src={user.avatarUrl || avatars[index % avatars.length]}
                  className={`
                    w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]
                    object-cover transition-all duration-300
                    ${isManaging ? "blur-[2px] brightness-50" : ""}
                    ${isSelected ? "border-4 border-white scale-105" : ""}
                  `}
                  alt={user.profileName ?? "perfil"}
                />

                {isManaging && (
                  <div className="absolute inset-0 flex items-center justify-center">

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button className="bg-white hover:bg-red-600 transition rounded-full p-2 md:p-3 text-black">
                          🗑
                        </button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="bg-black text-white border-white/20 mx-4">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            ¿Eliminar perfil?
                          </AlertDialogTitle>

                          <AlertDialogDescription>
                            Esta acción no se puede deshacer.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>
                            Cancelar
                          </AlertDialogCancel>

                          <AlertDialogAction
                            onClick={() => deleteUser(user.id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Eliminar
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </div>
                )}

              </div>

              <span
                className={`
                  text-xs md:text-sm font-medium transition-colors duration-200 text-center
                  ${isManaging ? "text-gray-500" : "text-gray-400 group-hover:text-white"}
                `}
              >
                {user.profileName ?? "Perfil"}
              </span>

            </div>
          )
        })}

        <Addprofile />

      </div>

      <Button
        variant="outline"
        size="lg"
        className="mt-2 md:mt-4 px-6 md:px-10 py-2 w-full max-w-xs md:w-auto bg-transparent border border-gray-500 text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm md:text-base font-semibold tracking-widest uppercase"
        onClick={() => setIsManaging(!isManaging)}
      >
        {isManaging ? "Listo" : "Administrar perfiles"}
      </Button>

    </div>
  )
}