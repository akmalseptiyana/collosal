import * as React from "react";

import { cn } from "@src/lib/utils";

type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, style, children, htmlFor, ...rest }, ref) => (
    <label
      className={cn("form-label text-muted", className)}
      htmlFor={htmlFor}
      ref={ref}
      {...rest}
    >
      {children}
    </label>
  ),
);
