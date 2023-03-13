import * as React from "react";

import { cn } from "@src/lib/utils";

type InputTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputTextarea = React.forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(({ className, rows = 4, ...rest }, ref) => {
  return (
    <textarea
      className={cn(
        "block w-full text-sm bg-transparent border border-button-light rounded-[3px] outline-none pt-2 pl-4",
        className,
      )}
      ref={ref}
      rows={rows}
      {...rest}
    />
  );
});
