import React from "react";
import { TriangleAlert } from "lucide-react";
import { FormErrorProps } from "./FormError.types";
export default function FormError(props:FormErrorProps) {
    const { message } = props;
    if (!message) {
        return null;
    }
  return <div className="bg-destructive/50 p-3 rounded-b-md flex items-center gap-x-2 text bg-red-500/20 border border-red-500/60 text-red-100
"> <TriangleAlert/> <p>{message} </p> 
 
   </div>
}