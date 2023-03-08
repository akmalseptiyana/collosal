import * as React from "react";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { ServicesSection } from "./services-section";

export function ServicesDetailFaq() {
  return (
    <ServicesSection className="mt-[124px] mb-[106px]">
      <Container className="container">
        <Badge className="text-center">FAQ</Badge>
        <Title className="mx-auto max-w-[507px] text-center">
          Frequently asked questions, maybe the same as yours
        </Title>
        <div className="mt-20 grid grid-cols-1 gap-x-7 gap-y-[50px] sm:grid-cols-2">
          {faq.map(({ question, answer }, index) => (
            <div key={index} className="max-w-[495px]">
              <h3 className="faq-title text-white">{question}</h3>
              <p className="faq-description text-muted">{answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-[90px] text-center text-base font-medium text-white">
          Didn't find an answer?{" "}
          <a
            href="#"
            className="border-b border-primary text-base font-bold text-primary"
          >
            Do not hesitate to ask!
          </a>
        </p>
      </Container>
    </ServicesSection>
  );
}

const faq = [
  {
    question: "How is the payment system?",
    answer:
      "If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.",
  },
  {
    question: "Can I consult first?",
    answer:
      "Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.",
  },
  {
    question: "What if the project stops halfway?",
    answer:
      "We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.",
  },
  {
    question: "Does it include servers and domains?",
    answer:
      "You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.",
  },
  {
    question: "Will I get the source code?",
    answer:
      "When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.",
  },
];
