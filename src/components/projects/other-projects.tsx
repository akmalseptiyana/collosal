import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { ProjectCard } from "../project-card";

export function OtherProjects() {
  return (
    <section className="mt-[120px]">
      <Container className="container">
        <Badge className="text-center">PROJECTS</Badge>
        <Title className="text-center">Other Amazing Projects</Title>
        <ul className="mt-[70px] mb-[138px] flex flex-wrap gap-x-5 gap-y-[70px]">
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
      </Container>
    </section>
  );
}
