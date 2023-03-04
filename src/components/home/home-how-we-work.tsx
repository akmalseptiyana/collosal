import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "../ui/container";
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
          <div className="text-center md:text-start lg:max-w-[502px]">
            <p className="section-badge text-green">HOW WE WORK?</p>
            <h2 className="section-title mt-1 text-white">
              Everything is well planned, well designed and developed
              wholeheartedly
            </h2>
            <p className="section-paragraph mt-7 text-muted">
              Careful planning makes us confident, developed with best practices
              so that the project can be maintained. We always test projects
              before they are shipped.
            </p>
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}
