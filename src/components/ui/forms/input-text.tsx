import * as React from "react";

import { cn } from "@src/lib/utils";

type InputTextProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, type = "text", ...rest }, ref) => {
    return (
      <input
        className={cn(
          "block w-full h-10 text-sm text-muted bg-transparent border border-button-light rounded-[3px] pl-4 outline-none",
          className,
        )}
        ref={ref}
        type={type}
        {...rest}
      />
    );
  },
);
