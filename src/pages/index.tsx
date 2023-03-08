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
import { Divider } from "@src/components/ui/divider";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <HomeStart />
        <HomeFeatured />
        <HomeLogos />
        <HomeHowWeWork />
        <HomeOurTeam />
        <Divider className="mt-[118px]" />
        <HomeProject />
        <HomeGetStarted />
        <HomeTestimonial />
      </Page>
    </LayoutRoot>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
