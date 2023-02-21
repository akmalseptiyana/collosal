import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[3px] text-base font-semibold disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        "solid-primary": "bg-primary text-white",
        "light-primary": "bg-primary-light text-white",
        "outline-primary": "bg-transparent border border-primary text-primary",
        "solid-white": "bg-white text-dark",
        "light-white": "bg-button-light text-white",
        "outline-white": "bg-transparent border border-white text-white",
      },
      size: {
        sm: "h-10 py-2.5 px-[30px]",
        lg: "h-[52px] py-[15px] px-[55px]",
      },
      rounded: {
        pill: "rounded-[100px]",
      },
    },
    defaultVariants: {
      variant: "solid-primary",
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
