import * as React from "react";

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mt-[101px]">
      <div className="container">
        <div className="text-center">
          <p className="section-badge text-green">{title}</p>
          <h1 className="page-title mx-auto mt-1 max-w-[507px] text-white">
            {description}
          </h1>
        </div>
      </div>
    </header>
  );
}
