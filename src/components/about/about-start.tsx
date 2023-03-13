import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { InnerSection } from "../ui/section/inner-section";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { Paragraph } from "../ui/section/paragraph";

export function AboutStart() {
  return (
    <section className="mt-[90px]">
      <Container className="container flex flex-wrap items-center justify-between gap-y-10">
        <StaticImage
          src="../../images/about.png"
          alt="About Team"
          className="mx-auto sm:h-[479px] sm:w-[362px]"
        />
        <InnerSection className="max-w-[544px]">
          <Badge>ABOUT</Badge>
          <Title>We are creative, smart and hardworking people</Title>
          <Paragraph>
            Several creative people gather in the same place - that's Collosal.
            We collaborate to produce the best results, loved by clients and
            comfortable for users. Here we maintain togetherness even though
            with different backgrounds, all the people here are already experts
            in their respective fields.
          </Paragraph>
        </InnerSection>
      </Container>
    </section>
  );
}
