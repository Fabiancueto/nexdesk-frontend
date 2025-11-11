"use client";

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "../utils"; // Ajusta la ruta según tu estructura

// Root
export const Dialog = (props) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

// Trigger
export const DialogTrigger = (props) => (
  <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
);

// Portal
export const DialogPortal = (props) => (
  <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
);

// Close Button Wrapper
export const DialogClose = (props) => (
  <DialogPrimitive.Close data-slot="dialog-close" {...props} />
);

// Overlay (background oscuro)
export const DialogOverlay = ({ className = "", ...props }) => (
  <DialogPrimitive.Overlay
    data-slot="dialog-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
);

// Content (contenedor principal del diálogo)
export const DialogContent = ({ className = "", children, ...props }) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      data-slot="dialog-content"
      className={cn(
        "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 sm:max-w-lg data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
        className
      )}
      {...props}
    >
      {children}

      {/* Botón de cierre */}
      <DialogPrimitive.Close
        className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background data-[state=open]:bg-accent data-[state=open]:text-muted-foreground disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        <XIcon />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
);

// Header (zona superior con título)
export const DialogHeader = ({ className = "", ...props }) => (
  <div
    data-slot="dialog-header"
    className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
    {...props}
  />
);

// Footer (zona inferior con botones)
export const DialogFooter = ({ className = "", ...props }) => (
  <div
    data-slot="dialog-footer"
    className={cn(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
);

// Título del diálogo
export const DialogTitle = ({ className = "", ...props }) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
);

// Descripción del diálogo
export const DialogDescription = ({ className = "", ...props }) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);
