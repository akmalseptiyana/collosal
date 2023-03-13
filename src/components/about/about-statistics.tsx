import * as React from "react";
import { Flag, User, DollarSign } from "lucide-react";

import { Container } from "../ui/container";
import { Badge } from "../ui/section/badge";
import { Title } from "../ui/section/title";
import { ListIcons } from "../ui/card/list-icons";

export function AboutStatistics() {
  return (
    <section className="mt-20">
      <Container className="container">
        <Badge className="text-center">STATISTICS</Badge>
        <Title className="mx-auto max-w-[507px] text-center">
          In 3 years we reached 8 countries, 193 clients and earning $100k USD
        </Title>
        <div className="mt-[90px] flex h-full items-center rounded-[3px] bg-light px-6 py-[50px] md:h-[157px] md:px-[90px] md:py-0">
          <ul className="flex w-full flex-wrap items-center justify-between gap-y-[50px]">
            <ListIcons
              Icon={Flag}
              value="8"
              text="COUNTRIES"
              keyValue
              reverse
              statistic
            />
            <ListIcons
              Icon={User}
              value="193"
              text="CLIENTS"
              keyValue
              reverse
              statistic
            />
            <ListIcons
              Icon={DollarSign}
              value="$100k"
              text="EARNING"
              keyValue
              reverse
              statistic
            />
          </ul>
        </div>
      </Container>
    </section>
  );
}
