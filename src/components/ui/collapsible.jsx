"use client";

import React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

export const Collapsible = (props) => {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
};

export const CollapsibleTrigger = (props) => {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
};

export const CollapsibleContent = (props) => {
  return (
    <CollapsiblePrimitive.Content
      data-slot="collapsible-content"
      {...props}
    />
  );
};
