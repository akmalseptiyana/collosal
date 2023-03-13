import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { InnerSection } from "../ui/section/inner-section";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { Paragraph } from "../ui/section/paragraph";

export function Step2() {
  return (
    <section className="mt-[166px]">
      <Container className="container flex flex-wrap justify-between gap-y-20">
        <InnerSection className="max-w-[502px]">
          <Badge>STEP 02</Badge>
          <Title>
            Doing planning, design and development until everything is finished
          </Title>
          <Paragraph>
            When everything is agreed upon, our team will make plans related to
            the application that will be created. Starting from analysis,
            design, to development.
            <br /> <br />
            In this step, the application is 100% complete.
          </Paragraph>
        </InnerSection>
        <StaticImage
          src="../../images/dev-illustration.svg"
          alt="Development"
        />
      </Container>
    </section>
  );
}
