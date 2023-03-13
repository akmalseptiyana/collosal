import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { ProjectCard } from "@src/components/project-card";
import { Button } from "@src/components/ui/button";

export function ProjectsStart() {
  return (
    <section className="mt-[90px] mb-[60px]">
      <Container className="container flex flex-col items-center space-y-[90px]">
        <ul className="flex flex-wrap gap-x-5 gap-y-[70px]">
          <ProjectCard
            img={
              <StaticImage
                src="../../images/mobile-project.svg"
                alt="A landing page for mobile app"
              />
            }
            title="The Mobile App Landing Page"
            description="A landing page for mobile app"
          />
          <ProjectCard
            img={
              <StaticImage
                src="../../images/desktop-project.svg"
                alt="A landing page for desktop app"
              />
            }
            title="The Desktop App Landing Page"
            description="A landing page for desktop app"
          />
          <ProjectCard
            img={
              <StaticImage
                src="../../images/desktop-project.svg"
                alt="A landing page for desktop app"
              />
            }
            title="The Desktop App Landing Page"
            description="A landing page for desktop app"
          />
          <ProjectCard
            img={
              <StaticImage
                src="../../images/mobile-project.svg"
                alt="A landing page for mobile app"
              />
            }
            title="The Mobile App Landing Page"
            description="A landing page for mobile app"
          />
        </ul>
        <Button variant="light-white" size="lg">
          Load More
        </Button>
      </Container>
    </section>
  );
}
