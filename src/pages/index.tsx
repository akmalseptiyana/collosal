import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <section className="container"></section>
    </LayoutRoot>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
