import * as React from "react";

import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";

type CalloutType = {
  className?: string;
};

export function Callout({ className }: CalloutType) {
  return (
    <section className={cn("container", className)}>
      <div className="flex flex-wrap items-center justify-between gap-y-10 border-y border-border-light py-[47px]">
        <h2 className="section-title mx-auto max-w-[589px] text-center text-white md:mx-0 md:text-start">
          We've prepared everything, it's time for you to tell the problem
        </h2>
        <div className="mx-auto flex gap-[10px] md:mx-0">
          <Button
            variant="solid-primary"
            size="lg"
            className="px-10 py-[15px] md:px-[55px]"
          >
            Send Quote
          </Button>
          <Button
            variant="light-white"
            size="lg"
            className="px-10 py-[15px] md:px-[55px]"
          >
            Ask Us
          </Button>
        </div>
      </div>
    </section>
  );
}
