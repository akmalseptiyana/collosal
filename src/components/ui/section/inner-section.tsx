import * as React from "react";

import { Props } from "./utils/type";
import { cn } from "@src/lib/utils";

export function InnerSection({ className, children, ...rest }: Props) {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
}
