import * as React from "react";

import { cn } from "@src/lib/utils";
import { DoubleQuote } from "@src/components/ui/icons";

type TestimonialCardProps = {
  img: React.ReactNode;
  name: string;
  company: string;
  text: string;
  className?: string;
  isActive?: boolean;
};

export function TestimonialCard({
  img,
  name,
  company,
  text,
  className,
  isActive,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "max-w-[415px] h-[447px] flex flex-col items-center justify-center bg-light transition-transform duration-200",
        className,
        isActive
          ? "border-2 border-primary -translate-y-11"
          : "border-none -translate-y-0",
      )}
      {...props}
    >
      <figure className="relative">
        {img}
        <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-card-dark bg-primary">
          <DoubleQuote />
        </div>
      </figure>
      <h3 className="testimonial-name mt-[21px] text-white">{name}</h3>
      <h4 className="testimonial-company mt-2 text-white/60">{company}</h4>
      <p
        className={cn(
          "testimonial-description text-center max-w-[321px] mx-auto mt-8",
          isActive ? "text-white" : "text-muted",
        )}
      >
        "{text}"
      </p>
    </div>
  );
}
