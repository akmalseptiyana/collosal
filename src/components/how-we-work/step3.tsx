import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { InnerSection } from "../ui/section/inner-section";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { Paragraph } from "../ui/section/paragraph";

export function Step3() {
  return (
    <section className="mt-[120px] mb-[152px]">
      <Container className="container flex flex-wrap items-center justify-between gap-y-20">
        <StaticImage
          src="../../images/server-illustration.svg"
          alt="Server"
          class="lg:flex-1"
        />
        <InnerSection className="max-w-[502px]">
          <Badge>STEP 03</Badge>
          <Title>
            The project is complete and we ship all the project assets, and
            access to the server
          </Title>
          <Paragraph>
            We will be responsible for delivering all the project assets to you,
            don't worry. These assets include, design files, source code, server
            access, and so on.
            <br /> <br />
            In this step, everything is done and the contract ends.
          </Paragraph>
        </InnerSection>
      </Container>
    </section>
  );
}
