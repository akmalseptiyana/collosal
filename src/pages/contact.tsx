import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page } from "@src/components/layout/page";
import { ContactStart } from "@src/components/contact/contact-start";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <ContactStart />
      </Page>
    </LayoutRoot>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact Page</title>;
