"use client"

import { FormAddProfileProps } from "./FormAddProfile.types"
import { formSchema } from "./formAddProfile.form"
import { avatars } from "./FormAddProfile.data"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function FormAddProfile(props: FormAddProfileProps) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const { setOpen } = props

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileName: "",
      avatarUrl: "/usuarios/christian.jpg",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    try {
      setIsLoading(true)

      const response = await axios.post("/api/UserNetflix", values)

      if(response.status === 200) {
        toast.success("¡ Se ha creado el perfil correctamente ") 
      } else {
        toast.error("ops ha ocurrido un error")
      }

      router.refresh()
      setOpen(false)

    } catch (error) {
      console.log(error)
      toast.error("OMG HA OCURRIDO UN ERROR")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">

        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Nombre del perfil
              </FormLabel>

              <FormControl>
                <Input
                  placeholder="Ej: Yeison"
                  {...field}
                  className="bg-black border-white/30 text-white placeholder:text-white/50"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="avatarUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Selecciona tu avatar
              </FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-4"
                >
                  {avatars.map((avatar) => {
                    const isSelected = field.value === avatar

                    return (
                      <div key={avatar} className="flex flex-col items-center">

                        <RadioGroupItem
                          value={avatar}
                          id={avatar}
                          className="sr-only"
                        />

                        <Label
                          htmlFor={avatar}
                          className="cursor-pointer relative group"
                        >
                          <img
                            src={avatar}
                            alt="avatar"
                            className={`
                              w-16 h-16 rounded-full object-cover
                              border-4 transition-all duration-300
                              ${isSelected 
                                ? "border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                                : "border-transparent group-hover:scale-105"
                              }
                            `}
                          />

                          <span
                            className={`
                              absolute -top-1 -right-1
                              w-5 h-5 rounded-full bg-white
                              transition-all duration-300
                              ${isSelected ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                            `}
                          />
                        </Label>

                      </div>
                    )
                  })}
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            disabled={isLoading}
            className="bg-white text-black hover:bg-gray-200"
          >
            {isLoading ? "Creando..." : "Crear perfil"}
          </Button>

        </div>

      </form>
    </Form>
  )
}