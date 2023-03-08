import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page, PageHeader } from "@src/components/layout/page";
import { Container } from "@src/components/ui/container";

const BlogDetail: React.FC<PageProps> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <LayoutRoot>
      <Page>
        <Container className="container mb-[117px]">
          <article>
            <PageHeader title="PAGE" description={data.mdx.frontmatter.title} />
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
              className="left-1/2 mt-[90px] -translate-x-1/2"
            />
            <Container className="post-content mx-auto mt-[70px] max-w-[674px] space-y-[30px]">
              {children}
            </Container>
          </article>
        </Container>
      </Page>
    </LayoutRoot>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        reading_time
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogDetail;

export const Head: HeadFC = () => <title>Blog Detail</title>;
