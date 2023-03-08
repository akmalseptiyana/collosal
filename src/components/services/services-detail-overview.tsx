import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { Paragraph } from "../ui/section/paragraph";
import { ServicesSection } from "./services-section";

export function ServicesDetailOverview() {
  return (
    <ServicesSection className="mt-20">
      <Container className="container flex flex-wrap gap-[76px]">
        <StaticImage
          src="../../images/development-illustration.svg"
          alt="Development"
          className="mx-auto max-w-[401px]"
        />
        <div className="lg:max-w-[502px]">
          <Paragraph>
            Just tell us your repetitive problem or the primitive method used
            today, and we will create a digital solution. <br /> <br /> We can
            build you a website, a mobile app and a desktop app. All types of
            applications have a good security system, are easy to maintain, and
            are high speed.
          </Paragraph>
          <ul className="mt-[42px] space-y-[10px]">
            <li className="section-paragraph flex items-center text-white before:mr-[22px] before:block before:h-2 before:w-2 before:bg-white">
              Avoid potential bugs with unit testing
            </li>
            <li className="section-paragraph flex items-center text-white before:mr-[22px] before:block before:h-2 before:w-2 before:bg-white">
              Removing unused code will speed up the application
            </li>
            <li className="section-paragraph flex items-center text-white before:mr-[22px] before:block before:h-2 before:w-2 before:bg-white">
              The modern design pleases the users
            </li>
            <li className="section-paragraph flex items-center text-white before:mr-[22px] before:block before:h-2 before:w-2 before:bg-white">
              A good UX will not disappoint users
            </li>
          </ul>
        </div>
      </Container>
    </ServicesSection>
  );
}
