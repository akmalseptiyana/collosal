import * as React from "react";

import { Props } from "./utils/type";
import { cn } from "@src/lib/utils";

export function Badge({ children, className }: Props) {
  return (
    <p className={cn("section-badge text-green", className)}>{children}</p>
  );
}
