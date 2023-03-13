import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page } from "@src/components/layout/page";
import { AboutStart } from "@src/components/about/about-start";
import { AboutStatistics } from "@src/components/about/about-statistics";
import { Logos } from "@src/components/logos";
import { Divider } from "@src/components/ui/divider";
import { AboutOurTeam } from "@src/components/about/about-our-team";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <AboutStart />
        <Divider className="mt-[120px]" />
        <AboutStatistics />
        <Logos />
        <AboutOurTeam />
      </Page>
    </LayoutRoot>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
