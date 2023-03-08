import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { InnerSection } from "../ui/section/inner-section";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { Paragraph } from "../ui/section/paragraph";
import { HomeSection } from "./home-section";

export function HomeOurTeam() {
  return (
    <HomeSection>
      <Container className="container mt-[120px]">
        <div className="flex flex-wrap items-center justify-center space-y-20 md:justify-between">
          <InnerSection className="text-center md:text-start lg:max-w-[415px]">
            <Badge>OUR TEAM</Badge>
            <Title>We're a team of designers, engineers and analysts</Title>
            <Paragraph>
              Our team consists of many creative people. We are committed to
              maintaining quality work as well as speed. These creative people
              work together to create maximum work results.
            </Paragraph>
            <Button variant="light-white" size="lg" className="mt-12">
              See Our Teams
            </Button>
          </InnerSection>
          <figure className="flex-1">
            <StaticImage
              src="../../images/team-illustration.png"
              alt="Team Illustration"
            />
          </figure>
        </div>
      </Container>
    </HomeSection>
  );
}
