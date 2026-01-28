"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Terms() {
  const [showExtraTerms, setShowExtraTerms] = useState(false);

  return (
    <div className="mt-4 mb-10 max-w-[20rem] text-xs text-gray-400">
      
      <div className="mb-3">
        <span>
          Esta página usa Google reCAPTCHA para asegurar que no eres un robot.
        </span>

        <Button
          variant="ghost"
          onClick={() => setShowExtraTerms(!showExtraTerms)}
          className="
            text-[#0071eb]
            hover:bg-transparent
            hover:underline
            underline-offset-2
            p-0
            ml-1
            h-auto
            inline
            font-normal
          "
        >
          Más información
        </Button>
      </div>

      {showExtraTerms && (
        <p className="text-gray-400 leading-relaxed">
          Google reCAPTCHA se utiliza para proteger el sitio contra fraudes y
          abusos. Analiza el comportamiento del usuario para determinar si es
          una persona real o un programa automatizado, ayudando a mantener la
          seguridad y la integridad de la plataforma.
        </p>
      )}
    </div>
  );
}
