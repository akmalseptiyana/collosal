import * as React from "react";

import { cn } from "@src/lib/utils";

export type ContainerProps = React.ComponentProps<"div">;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div className={cn(className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);
