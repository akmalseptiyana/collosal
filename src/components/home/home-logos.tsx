import * as React from "react";

import { Container } from "../ui/container";
import { HomeSection } from "./home-section";
import {
  Github,
  Forbes,
  Google,
  Microsoft,
  Facebook,
} from "@src/components/ui/icons";
import { cn } from "@src/lib/utils";

type Props = {
  className?: string;
};

export function HomeLogos({ className }: Props) {
  return (
    <HomeSection>
      <Container className={cn("container mt-[60px]", className)}>
        <ul className="flex flex-wrap items-center justify-center gap-11 border-y border-border-light py-[34px]">
          <li>
            <figure>
              <Github />
            </figure>
          </li>
          <li>
            <figure>
              <Forbes />
            </figure>
          </li>
          <li>
            <figure>
              <Google />
            </figure>
          </li>
          <li>
            <figure>
              <Microsoft />
            </figure>
          </li>
          <li>
            <figure>
              <Facebook />
            </figure>
          </li>
        </ul>
      </Container>
    </HomeSection>
  );
}
