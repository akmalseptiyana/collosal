import * as React from "react";

import { Container } from "../ui/container";
import { HomeSection } from "./home-section";
import { FeaturedCard } from "@src/components/featured-card";
import { Figma } from "@src/components/ui/icons/figma";
import { Code } from "@src/components/ui/icons/code";
import { Box } from "@src/components/ui/icons/box";

export function HomeFeatured() {
  return (
    <HomeSection>
      <Container className="container mt-[101px]">
        <ul className="flex flex-wrap justify-center gap-5">
          {featuredLists.map((item) => (
            <FeaturedCard key={item.title} iconStyle="boxedIcon" {...item} />
          ))}
        </ul>
      </Container>
    </HomeSection>
  );
}

export type FeaturedItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featuredLists: FeaturedItem[] = [
  {
    icon: <Figma />,
    title: "Design",
    description:
      "The project interface will be designed first, our favorite tool is Figma.",
  },
  {
    icon: <Code />,
    title: "Develop",
    description:
      "Transform design and write business logic here. Choose the technology you want.",
  },
  {
    icon: <Box />,
    title: "Ship",
    description:
      "After the work is complete, we will send the project and all its assets to you.",
  },
];
