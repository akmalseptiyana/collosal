import * as React from "react";

import { Props } from "./utils/type";
import { cn } from "@src/lib/utils";

export function Title({ children, className }: Props) {
  return (
    <h2 className={cn("section-title text-white mt-1", className)}>
      {children}
    </h2>
  );
}
