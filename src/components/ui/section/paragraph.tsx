import * as React from "react";

import { Props } from "./utils/type";
import { cn } from "@src/lib/utils";

export function Paragraph({ children, className }: Props) {
  return (
    <p className={cn("section-paragraph text-muted mt-[30px]", className)}>
      {children}
    </p>
  );
}
