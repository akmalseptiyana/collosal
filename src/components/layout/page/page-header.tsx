import * as React from "react";

import { Badge } from "@src/components/ui/section/badge";

type PageHeaderProps = {
  badge: string;
  title: string;
};

export function PageHeader({ badge, title }: PageHeaderProps) {
  return (
    <header className="mt-[101px]">
      <div className="container">
        <div className="text-center">
          <Badge>{badge}</Badge>
          <h1 className="page-title mx-auto mt-1 max-w-[507px] text-white">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
