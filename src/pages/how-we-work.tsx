import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page , PageHeader } from "@src/components/layout/page";
import { Divider } from "@src/components/ui/divider";
import { Step1 } from "@src/components/how-we-work/step1";
import { Step2 } from "@src/components/how-we-work/step2";
import { Step3 } from "@src/components/how-we-work/step3";

const HowWeWork: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageHeader
          badge="HOW WE WORK"
          title="We have a workflow that allows the job to be delivered well"
        />
        <Divider className="mt-[90px]" />
        <Step1 />
        <Step2 />
        <Step3 />
      </Page>
    </LayoutRoot>
  );
};

export default HowWeWork;

const Head: HeadFC = () => <title>How We Work</title>;
