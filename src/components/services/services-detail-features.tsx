import * as React from "react";
import { Figma, Clock, Code, TrendingUp, Layout, Zap } from "lucide-react";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { FeaturedCard } from "../featured-card";
import { ServicesSection } from "./services-section";

export function ServicesDetailFeatures() {
  return (
    <ServicesSection className="mt-[124px]">
      <Container className="container">
        <Badge className="text-center">FEATURES</Badge>
        <Title className="mx-auto max-w-[507px] text-center">
          Here's what you will get when purchasing this service
        </Title>
        <ul className="mt-[90px] flex flex-wrap justify-center gap-5">
          {features.map((feature, index) => (
            <FeaturedCard key={index} {...feature} />
          ))}
        </ul>
      </Container>
    </ServicesSection>
  );
}

const features = [
  {
    icon: <Figma size={50} className="text-white" />,
    title: "Design Files",
    description:
      "Projects are well designed using Figma. You will get the design file.",
  },
  {
    icon: <Clock size={50} className="text-white" />,
    title: "Same Day",
    description:
      "We don't want you to wait long. Everything will be finished on the same day.",
  },
  {
    icon: <Code size={50} className="text-white" />,
    title: "Quality Code",
    description:
      "Code written according to good practice is highly maintainable.",
  },
  {
    icon: <TrendingUp size={50} className="text-white" />,
    title: "SEO",
    description:
      "The website will appear on the first page of the search engine.",
  },
  {
    icon: <Layout size={50} className="text-white" />,
    title: "Responsive Design",
    description: "Access the website on any device, don't limit your visitors.",
  },
  {
    icon: <Zap size={50} className="text-white" />,
    title: "Blazing Fast",
    description:
      "A high speed website will not disappoint prospective customers.",
  },
];
