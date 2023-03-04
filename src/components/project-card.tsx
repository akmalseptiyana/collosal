import * as React from "react";

import { Button } from "@src/components/ui/button";

type ProjectCardProps = {
  img: React.ReactNode;
  title: string;
  description: string;
};

export function ProjectCard({
  img,
  title,
  description,
  ...props
}: ProjectCardProps) {
  return (
    <li className="text-center" {...props}>
      <figure>{img}</figure>
      <h3 className="project-title mt-10 text-white">{title}</h3>
      <p className="project-description mt-[10px] text-muted">{description}</p>
      <Button variant="outline-white" rounded="pill" className="mt-[38px]">
        Detail
      </Button>
    </li>
  );
}
