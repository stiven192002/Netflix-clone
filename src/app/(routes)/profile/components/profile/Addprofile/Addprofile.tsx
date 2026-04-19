"use client"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { PlusCircle } from "lucide-react"
 import FormAddProfile from "../../FormAddProfile/FormAddProfile"

export function Addprofile() {

  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
      <DialogTrigger asChild>
        <div className="group cursor-pointer flex flex-col items-center justify-center p-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          
          <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-white/10">
            <PlusCircle className="h-8 w-8 text-white transform transition-transform duration-300 group-hover:rotate-180" />
          </div>

          <p className="text-white mt-2 text-sm font-medium">
            Añadir perfil
          </p>

        </div>
      </DialogTrigger>

      <DialogContent className="bg-black border border-white/20 text-white rounded-2xl">
        
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Añadir perfil
          </DialogTitle>

          <DialogDescription className="text-white/70">
            Añade los diferentes perfiles de tu app
          </DialogDescription>
        </DialogHeader>

        
    <FormAddProfile setOpen={setOpen}/>
      </DialogContent>
 
    </Dialog>
  )
}