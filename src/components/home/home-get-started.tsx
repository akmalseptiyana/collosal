import * as React from "react";

import { Container } from "../ui/container";
import { HomeSection } from "./home-section";
import { PricingCard } from "@src/components/pricing-card";

export function HomeGetStarted() {
  return (
    <HomeSection>
      <Container className="mx-auto mt-[110px] max-w-[1303px] bg-highlight pt-[90px] pb-[145px] xl:rounded-[30px]">
        <Container className="mx-auto max-w-[1024px]">
          <p className="section-badge text-center text-green">GET STARTED</p>
          <h2 className="section-title mt-1 text-center text-white">
            What do you need? Choose a <br /> service that can help you
          </h2>
          <ul className="mt-[70px] flex flex-wrap justify-center gap-5">
            {services.map((item, index) => (
              <PricingCard
                key={index}
                {...item}
                className="bg-[#233679] first:bg-[#3F2379] last:bg-[#792366]"
              />
            ))}
          </ul>
        </Container>
      </Container>
    </HomeSection>
  );
}

type ServiceItem = {
  serviceTitle: string;
  price: number;
  serviceLists: string[];
};

const services: ServiceItem[] = [
  {
    serviceTitle: "UI Design",
    price: 1200,
    serviceLists: [
      "10 design pages",
      "Well-documented",
      "4 revisions",
      "$100/additional page",
    ],
  },
  {
    serviceTitle: "Development",
    price: 5000,
    serviceLists: [
      "Web & Mobile",
      "Well-documented",
      "8 revisions",
      "$1000/additional feature",
    ],
  },
  {
    serviceTitle: "Maintenance",
    price: 3000,
    serviceLists: [
      "Daily Backup",
      "3 hourse of maintenance",
      "Including fixing",
      "$50/additional hour",
    ],
  },
];
