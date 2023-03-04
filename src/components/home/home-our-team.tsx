import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { HomeSection } from "./home-section";

export function HomeOurTeam() {
  return (
    <HomeSection>
      <Container className="container mt-[120px]">
        <div className="flex flex-wrap items-center justify-center space-y-20 md:justify-between">
          <div className="text-center md:text-start lg:max-w-[415px]">
            <p className="section-badge text-green">OUR TEAM</p>
            <h2 className="section-title mt-1 text-white">
              We're a team of designers, engineers and analysts
            </h2>
            <p className="section-paragraph mt-[30px] text-muted">
              Our team consists of many creative people. We are committed to
              maintaining quality work as well as speed. These creative people
              work together to create maximum work results.
            </p>
            <Button variant="light-white" size="lg" className="mt-12">
              See Our Teams
            </Button>
          </div>
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
