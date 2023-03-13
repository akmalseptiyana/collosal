import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { InnerSection } from "../ui/section/inner-section";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { Paragraph } from "../ui/section/paragraph";

export function Step1() {
  return (
    <section className="mt-[124px]">
      <Container className="container flex flex-wrap items-center justify-between gap-y-14">
        <StaticImage
          src="../../images/discuss-illustration.png"
          alt="Discuss"
          className="sm:h-[408px] sm:w-[411px]"
        />
        <InnerSection className="max-w-[502px]">
          <Badge>STEP 01</Badge>
          <Title>Let's talk about your company's problems first</Title>
          <Paragraph>
            After submitting the quote form, we will review the data, then we
            will contact you. You can discuss with our team regarding your
            problem and find a solution to that problem.
            <br /> <br />
            In this step, you will discuss what application to build.
          </Paragraph>
        </InnerSection>
      </Container>
    </section>
  );
}
