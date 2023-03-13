import * as React from "react";

import { cn } from "@src/lib/utils";

type Props = {
  Icon: React.ElementType;
  text?: string;
  value: string;
  keyValue?: boolean;
  reverse?: boolean;
  statistic?: boolean;
};

export function ListIcons({
  Icon,
  text,
  value,
  keyValue,
  reverse,
  statistic,
  ...rest
}: Props) {
  if (keyValue) {
    return (
      <li className="flex items-center gap-x-7" {...rest}>
        <figure className="flex h-[70px] w-[70px] items-center justify-center rounded-[3px] bg-light">
          <Icon size={30} className="text-white" />
        </figure>
        <div className={cn("flex", reverse ? "flex-col-reverse" : "flex-col")}>
          <p
            className={cn(
              "text-muted",
              statistic ? "statistic-label" : "icon-list-label",
            )}
          >
            {text}
          </p>
          <h3
            className={cn(
              "text-white",
              statistic ? "statistic-value" : "icon-list-value",
            )}
          >
            {value}
          </h3>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-x-7" {...rest}>
      <figure className="flex h-[50px] w-[50px] items-center justify-center rounded-[3px] bg-light">
        <Icon size={20} className="text-white" />
      </figure>
      <div>
        <h3 className="section-paragraph text-white">{value}</h3>
      </div>
    </li>
  );
}
