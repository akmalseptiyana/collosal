import * as React from "react";

import { cn } from "@src/lib/utils";

type FormLabelProps = React.HTMLAttributes<HTMLDivElement>;

export const FormGroup = React.forwardRef<HTMLDivElement, FormLabelProps>(
  ({ className, children }, ref) => {
    return (
      <div className={cn("flex rounded-md", className)} ref={ref}>
        {children}
      </div>
    );
  },
);
