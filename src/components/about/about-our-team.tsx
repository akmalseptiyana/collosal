import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { TeamCard } from "./team-card";

export function AboutOurTeam() {
  return (
    <section className="mt-[120px] mb-[126px]">
      <Container className="container">
        <Badge className="text-center">OUR TEAM</Badge>
        <Title className="mx-auto max-w-[507px] text-center">
          Meet the team! All creative people are here
        </Title>
        <div className="mt-[100px] flex flex-wrap justify-center gap-x-5 gap-y-[30px]">
          {teams.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>
      </Container>
    </section>
  );
}

const teams = [
  {
    image: <StaticImage src="../../images/team-1.png" alt="our team" />,
    name: "Albert Flores",
    role: "founder",
  },
  {
    image: <StaticImage src="../../images/team-2.png" alt="our team" />,
    name: "Devon Lane",
    role: "Chief Technology Officer",
  },
  {
    image: <StaticImage src="../../images/team-3.png" alt="our team" />,
    name: "Darrell Steward",
    role: "UI Designer",
  },
  {
    image: <StaticImage src="../../images/team-4.png" alt="our team" />,
    name: "Marvin McKinney",
    role: "Software Engineer",
  },
  {
    image: <StaticImage src="../../images/team-5.png" alt="our team" />,
    name: "Floyd Miles",
    role: "System Analyst",
  },
  {
    image: <StaticImage src="../../images/team-6.png" alt="our team" />,
    name: "Annette Black",
    role: "Project Manager",
  },
];
