import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "../ui/container";
import { InnerSection } from "../ui/section/inner-section";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { Paragraph } from "../ui/section/paragraph";
import { HomeSection } from "./home-section";

export function HomeHowWeWork() {
  return (
    <HomeSection>
      <Container className="container mt-[130px]">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <figure className="flex-1">
            <StaticImage
              src="../../images/how-we-work-illustration.svg"
              alt="how we work illustration"
            />
          </figure>
          <InnerSection className="text-center md:text-start lg:max-w-[502px]">
            <Badge>HOW WE WORK?</Badge>
            <Title>
              Everything is well planned, well designed and developed
              wholeheartedly
            </Title>
            <Paragraph>
              Careful planning makes us confident, developed with best practices
              so that the project can be maintained. We always test projects
              before they are shipped.
            </Paragraph>
          </InnerSection>
        </div>
      </Container>
    </HomeSection>
  );
}
