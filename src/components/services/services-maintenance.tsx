import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  ArrowRight,
  Download,
  RefreshCcw,
  ArrowUp,
  CheckCircle,
} from "lucide-react";

import { ServicesSection } from "./services-section";
import { Container } from "@src/components/ui/container";
import { InnerSection } from "@src/components/ui/section/inner-section";
import { Badge } from "@src/components/ui/section/badge";
import { Title } from "@src/components/ui/section/title";
import { Paragraph } from "@src/components/ui/section/paragraph";
import { ListIcons } from "@src/components/ui/card/list-icons";

export function ServicesMaintenance() {
  return (
    <ServicesSection className="mb-[153px]">
      <Container className="container mt-[115px] flex flex-wrap items-center justify-between gap-y-20">
        <StaticImage
          src="../../images/maintenance-illustration.svg"
          alt="Maintenance Illustration"
          className="mx-auto lg:flex-1"
        />
        <InnerSection className="lg:max-w-[502px]">
          <Badge>MAINTENANCE</Badge>
          <Title>
            Think of your server as your own child, taking care of it every day
          </Title>
          <Paragraph>
            We will back up your servers every day, clean them every week,
            upgrade them when there is an update.
          </Paragraph>
          <Container className="flex flex-col space-y-[30px]">
            <ul className="mt-7 grid grid-cols-1 gap-y-5 gap-x-7 md:grid-cols-2">
              {featureList.map(({ icon, value }, index) => (
                <ListIcons key={index} Icon={icon} value={value} />
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
      </Container>
    </ServicesSection>
  );
}

const featureList = [
  {
    icon: Download,
    value: "Back up every day",
  },
  {
    icon: ArrowUp,
    value: "Upgrade",
  },
  {
    icon: RefreshCcw,
    value: "Cleaning every week",
  },
  {
    icon: CheckCircle,
    value: "Fixing error",
  },
];
