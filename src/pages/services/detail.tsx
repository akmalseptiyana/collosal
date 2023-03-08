import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page, PageHeader } from "@src/components/layout/page";

const ServicesDetailPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageHeader
          badge="DEVELOPMENT"
          title="Solve your company's repetitive problems by designing apps"
        />
      </Page>
    </LayoutRoot>
  );
};

export default ServicesDetailPage;

export const Head: HeadFC = () => <title>Services Detail Page</title>;
