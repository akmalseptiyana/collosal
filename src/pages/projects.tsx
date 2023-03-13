import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page } from "@src/components/layout/page";
import { Badge } from "@src/components/ui/section/badge";
import { Container } from "@src/components/ui/container";
import { InputSelect } from "@src/components/ui/forms/input-select";
import { FormLabel } from "@src/components/ui/forms/form-label";
import { Divider } from "@src/components/ui/divider";
import { ProjectsStart } from "@src/components/projects/projects-start";

const Projects: React.FC<PageProps> = () => {
  return (
    <LayoutRoot>
      <Page>
        <header className="mt-[101px]">
          <Container className="container flex flex-wrap items-center justify-between gap-y-10">
            <div>
              <Badge>PROJECTS</Badge>
              <h1 className="page-title mt-1 max-w-[507px] text-white">
                We have completed many amazing projects that you will not
                believe
              </h1>
            </div>
            <FormLabel className="sr-only">Project Options</FormLabel>
            <InputSelect id="field" className="ml-auto">
              <option value="technology">Technology</option>
            </InputSelect>
          </Container>
        </header>
        <Divider className="mt-[90px]" />
        <ProjectsStart />
      </Page>
    </LayoutRoot>
  );
};

export default Projects;

export const Head: HeadFC = () => <title>Projects Page</title>;
