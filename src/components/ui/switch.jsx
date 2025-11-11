"use client";

import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "./utils";

export const Switch = ({ className = "", ...props }) => (
  <SwitchPrimitive.Root
    data-slot="switch"
    className={cn(
      // 🔹 Ajuste: fondo visible gris cuando está apagado
      "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-[#3CA2A2]", // encendido
      "data-[state=unchecked]:bg-gray-300", // apagado gris constante
      "dark:data-[state=unchecked]:bg-gray-600 dark:data-[state=checked]:bg-[#3CA2A2]",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        // 🔹 Mantiene el círculo blanco y animado
        "pointer-events-none block size-4 rounded-full bg-white shadow-md ring-0 transition-transform",
        "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitive.Root>
);
