import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout, MousePointer, ArrowRight } from "lucide-react";

import { Link } from "gatsby";
import { ServicesSection } from "./services-section";
import { Container } from "@src/components/ui/container";
import { SmallCardIcons } from "@src/components/ui/card/small-card-icon";
import { InnerSection } from "@src/components/ui/section/inner-section";
import { Badge } from "@src/components/ui/section/badge";
import { Title } from "@src/components/ui/section/title";
import { Paragraph } from "@src/components/ui/section/paragraph";

export function ServicesUiDesign() {
  return (
    <ServicesSection className="mt-[90px]">
      <Container className="container flex flex-wrap items-start gap-[63px]">
        <StaticImage
          src="../../images/ui-design-illustration.svg"
          alt="UI Design"
          className="mx-auto lg:flex-1"
        />
        <InnerSection className="lg:max-w-[502px]">
          <Badge>UI DESIGN</Badge>
          <Title>
            Don't let your idea get caught by others, design a prototype for
            your idea
          </Title>
          <Paragraph>
            Delegate your ideas as quickly as possible, create beautiful designs
            and vivid prototypes.
          </Paragraph>

          <Container className="flex flex-col space-y-[30px]">
            <div className="mt-[52px] flex flex-wrap justify-center gap-5">
              <SmallCardIcons
                Icon={Layout}
                title="Beautiful Design"
                description="Create a modern design for your idea."
              />
              <SmallCardIcons
                Icon={MousePointer}
                title="User Friendly"
                description="Create vivid prototypes for your designs."
              />
            </div>
            <Link
              to="/services/detail"
              className="flex items-center self-end text-base font-semibold text-white"
            >
              Service Detail
              <ArrowRight size={20} className="ml-5 text-white" />
            </Link>
          </Container>
        </InnerSection>
      </Container>
    </ServicesSection>
  );
}
