import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page, PageHeader } from "@src/components/layout/page";
import { ServicesUiDesign } from "@src/components/services/services-ui-design";
import { Divider } from "@src/components/ui/divider";
import { ServicesDevelopment } from "@src/components/services/services-development";
import { ServicesMaintenance } from "@src/components/services/services-maintenance";

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageHeader
          badge="SERVICES"
          title="We are here to help solve your company's problems"
        />
        <Divider className="mt-[89px]" />
        <ServicesUiDesign />
        <ServicesDevelopment />
        <ServicesMaintenance />
      </Page>
    </LayoutRoot>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;
