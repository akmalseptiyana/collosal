import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const featuredCardVariants = cva(
  "w-[50px] h-[50px] flex items-center justify-center",
  {
    variants: {
      iconStyle: {
        boxedIcon: "bg-white/[0.03]",
        nakedIcon: "bg-transparent",
      },
    },
    defaultVariants: {
      iconStyle: "nakedIcon",
    },
  },
);

type FeaturedCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
} & VariantProps<typeof featuredCardVariants>;

export function FeaturedCard({
  icon,
  title,
  description,
  iconStyle,
  ...props
}: FeaturedCardProps) {
  return (
    <li className="h-[276px] w-[328px] bg-light pt-10 pl-10" {...props}>
      <figure className={cn(featuredCardVariants({ iconStyle }))}>
        {icon}
      </figure>
      <h3 className="featured-card-title mt-7 text-white">{title}</h3>
      <p className="featured-card-description mt-2 max-w-[239px] text-muted">
        {description}
      </p>
    </li>
  );
}
