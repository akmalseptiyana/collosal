import * as React from "react";

import { cn } from "@src/lib/utils";

type Props = {
  className?: string;
};

export function Divider({ className }: Props) {
  return (
    <hr
      className={cn("container max-w-[1024px] border-border-light", className)}
    />
  );
}
