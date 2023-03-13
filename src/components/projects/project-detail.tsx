import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../ui/container";
import { Paragraph } from "../ui/section/paragraph";

export function ProjectDetail() {
  return (
    <section className="mt-[66px]">
      <Container className="container flex flex-wrap items-center gap-10">
        <StaticImage
          src="../../images/desktop-project.svg"
          alt="A landing page for desktop app"
          className="lg:flex-1"
        />
        <div className="max-w-[502px]">
          <Paragraph className="mt-0">
            Something has always existed. According to physics, there can never
            be true physical nothingness—though there can be times when
            existence resembles nothing.
          </Paragraph>
          <ul className="mt-[52px] space-y-10">
            <li>
              <h3 className="project-detail-label text-muted">CATEGORY</h3>
              <p className="project-detail-value text-white">Development</p>
            </li>
            <li>
              <h3 className="project-detail-label text-muted">CLIENT</h3>
              <p className="project-detail-value text-white">Acme, Inc</p>
            </li>
            <li>
              <h3 className="project-detail-label text-muted">TECHNOLOGY</h3>
              <p className="project-detail-value text-white">
                JavaScript, HTML, CSS
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
