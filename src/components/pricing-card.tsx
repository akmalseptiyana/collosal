import * as React from "react";

import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";

type PricingCardProps = {
  serviceTitle: string;
  price: number;
  serviceLists: string[];
  className: string;
};

export function PricingCard({
  serviceTitle,
  price,
  serviceLists,
  className,
  ...props
}: PricingCardProps) {
  return (
    <li
      className={cn(
        "h-full w-[328px] rounded-[10px] px-[47px] pt-[58px] pb-[29px]",
        className,
      )}
      {...props}
    >
      <div className="flex justify-between">
        <h3 className="pricing-title text-white">{serviceTitle}</h3>
        <div>
          <p className="text-xs text-muted">Starting from</p>
          <h4 className="pricing-price text-white">{price}$</h4>
        </div>
      </div>
      <hr className="mt-[37px] border-white/5" />
      <ul className="mt-[37px] flex flex-col space-y-2 text-center">
        {serviceLists.map((item) => (
          <li key={item} className="pricing-detail text-white">
            {item}
          </li>
        ))}
      </ul>
      <Button variant="solid-white" size="lg" className="mt-[50px] px-[90px]">
        Detail
      </Button>
    </li>
  );
}
