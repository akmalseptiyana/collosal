import * as React from "react";

import { Container } from "../ui/container";
import { HomeSection } from "./home-section";
import { Button } from "@src/components/ui/button";

export function HomeStart() {
  return (
    <HomeSection>
      <Container className="container mt-[101px] text-center">
        <p className="section-badge text-green">CLIENT-DEVELOPMENT DRIVEN</p>
        <h1 className="page-title mt-3 text-white">
          We Design. We Develop. We Ship. <br /> In The Same Day.
        </h1>
        <p className="page-description mx-auto mt-6 max-w-[539px] text-muted">
          We are committed to not making clients wait. We will deliver the work
          as quickly as possible. Even on the same day. Even so, we do not
          reduce the quality of our work.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Button variant="solid-primary" size="lg">
            Send Quote
          </Button>
          <Button variant="light-white" size="lg">
            Learn More
          </Button>
        </div>
      </Container>
    </HomeSection>
  );
}
