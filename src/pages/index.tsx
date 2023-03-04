import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { HomeStart } from "@src/components/home/home-start";
import { HomeFeatured } from "@src/components/home/home-featured";
import { HomeHowWeWork } from "@src/components/home/home-how-we-work";
import { HomeOurTeam } from "@src/components/home/home-our-team";
import { HomeProject } from "@src/components/home/home-project";
import { HomeGetStarted } from "@src/components/home/home-get-started";
import { HomeTestimonial } from "@src/components/home/home-testimonial";
import { Page } from "@src/components/layout/page";
import { HomeLogos } from "@src/components/home/home-logos";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <HomeStart />
        <HomeFeatured />
        <HomeLogos />
        <HomeHowWeWork />
        <HomeOurTeam />
        <hr className="mx-auto mt-[118px] max-w-[1024px] border-border-light" />
        <HomeProject />
        <HomeGetStarted />
        <HomeTestimonial />
      </Page>
    </LayoutRoot>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
