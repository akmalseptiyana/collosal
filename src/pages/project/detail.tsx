import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page, PageHeader } from "@src/components/layout/page";
import { Divider } from "@src/components/ui/divider";
import { ProjectDetail } from "@src/components/projects/project-detail";
import { OtherProjects } from "@src/components/projects/other-projects";

const ProjectDetailPage: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageHeader
          badge="PROJECT DETAIL"
          title="The Desktop App Landing Page"
        />
        <Divider className="mt-[73px]" />
        <ProjectDetail />
        <Divider className="mt-[133px]" />
        <OtherProjects />
      </Page>
    </LayoutRoot>
  );
};

export default ProjectDetailPage;

export const Head: HeadFC = () => <title>Project Detail Page</title>;
