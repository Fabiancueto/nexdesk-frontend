import React from "react";
import { cn } from "./utils";

export const Skeleton = ({ className = "", ...props }) => (
  <div
    data-slot="skeleton"
    className={cn("bg-accent animate-pulse rounded-md", className)}
    {...props}
  />
);
