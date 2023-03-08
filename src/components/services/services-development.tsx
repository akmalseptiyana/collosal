import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Smartphone, Monitor, Globe, ArrowRight } from "lucide-react";

import { ServicesSection } from "./services-section";
import { Container } from "@src/components/ui/container";
import { InnerSection } from "@src/components/ui/section/inner-section";
import { Badge } from "@src/components/ui/section/badge";
import { Paragraph } from "@src/components/ui/section/paragraph";
import { Title } from "@src/components/ui/section/title";
import { CardListIcon } from "@src/components/ui/card/card-list-icon";

export type CardListType = keyof typeof cardList;

export function ServicesDevelopment() {
  return (
    <ServicesSection>
      <Container className="container mt-[137px] flex flex-wrap items-center gap-[70px]">
        <InnerSection className="lg:max-w-[502px]">
          <Badge>DEVELOPMENT</Badge>
          <Title>
            Create solutions to repetitive problems, design applications and
            access anywhere!
          </Title>
          <Paragraph>
            Just tell us your repetitive problem or the primitive method used
            today, and we will create a digital solution.
          </Paragraph>
          <Container className="flex flex-col space-y-[30px]">
            <ul className="mt-[52px] space-y-5">
              {cardList.map(({ icon, name }, index) => (
                <CardListIcon key={index} Icon={icon} cardName={name} />
              ))}
            </ul>
            <Link
              to="/service-detail"
              className="flex items-center self-end text-base font-semibold text-white"
            >
              Service Detail
              <ArrowRight size={20} className="ml-5 text-white" />
            </Link>
          </Container>
        </InnerSection>
        <StaticImage
          src="../../images/development-illustration.svg"
          alt="Development Illustration"
          className="mx-auto"
        />
      </Container>
    </ServicesSection>
  );
}

const cardList = [
  {
    icon: Smartphone,
    name: "Mobile App Development",
  },
  {
    icon: Monitor,
    name: "Desktop App Development",
  },
  {
    icon: Globe,
    name: "Web App Development",
  },
];
