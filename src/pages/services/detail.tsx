import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page, PageHeader } from "@src/components/layout/page";
import { Divider } from "@src/components/ui/divider";
import { ServicesDetailOverview } from "@src/components/services/services-detail-overview";
import { ServicesDetailFeatures } from "@src/components/services/services-detail-features";
import { ServicesDetailFaq } from "@src/components/services/services-detail-faq";

const ServicesDetailPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageHeader
          badge="DEVELOPMENT"
          title="Solve your company's repetitive problems by designing apps"
        />
        <Divider className="mt-[94px]" />
        <ServicesDetailOverview />
        <ServicesDetailFeatures />
        <ServicesDetailFaq />
      </Page>
    </LayoutRoot>
  );
};

export default ServicesDetailPage;

export const Head: HeadFC = () => <title>Services Detail Page</title>;
