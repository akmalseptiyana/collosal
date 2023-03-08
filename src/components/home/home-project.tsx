import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { HomeSection } from "./home-section";
import { ProjectCard } from "@src/components/project-card";

export function HomeProject() {
  return (
    <HomeSection>
      <Container className="container mt-[118px]">
        <Badge className="text-center">PROJECTS</Badge>
        <Title className="mx-auto max-w-[507px] text-center">
          We have completed many amazing projects that you will not believe
        </Title>
        <ul className="mt-[71px] flex flex-wrap gap-x-5 gap-y-20">
          <ProjectCard
            img={
              <StaticImage
                src="../../images/mobile-project.svg"
                alt="The Mobile App Landing Page"
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
        </ul>
      </Container>
    </HomeSection>
  );
}
