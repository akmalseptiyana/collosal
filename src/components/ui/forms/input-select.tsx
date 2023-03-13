import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@src/lib/utils";

type SelectProps = {} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const InputSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, style, ...rest }, ref) => (
    <div className={cn("relative z-10", className)}>
      <select
        className="h-10 w-[174px] appearance-none rounded-[3px] border border-border-light bg-transparent pl-5 text-base text-muted outline-none"
        ref={ref}
        style={style}
        {...rest}
      >
        {children}
      </select>
      <ChevronDown
        size={18}
        className="absolute top-3 right-[14px] -z-10 inline text-muted"
      />
    </div>
  ),
);
