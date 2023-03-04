import * as React from "react";

import { cn } from "@src/lib/utils";

export const HomeSection = React.forwardRef<
  HTMLElement,
  React.ComponentProps<"section">
>(({ className, style, children, ...rest }, ref) => {
  return (
    <section className={cn(className)} ref={ref} style={style} {...rest}>
      {children}
    </section>
  );
});
