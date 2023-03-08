import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Button } from "@src/components/ui/button";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <section className="container mt-[137px] mb-[123px] text-center">
        <p className="section-badge text-red">ERROR</p>
        <h1 className="page-title mt-[13px] text-white">
          The page you are looking <br /> for is not on this website, <br />{" "}
          please check again
        </h1>
        <p className="page-description mx-auto mt-6 max-w-[502px] text-muted">
          The system cannot find the page you are looking for, maybe you have
          the wrong path or the page has been deleted.
        </p>
        <Button variant="light-white" size="lg" className="mt-[30px]">
          <Link to="/">Back to Home</Link>
        </Button>
      </section>
    </LayoutRoot>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
