import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import type { HeadFC, PageProps } from "gatsby";

import { LayoutRoot } from "@src/components/layout/layout-root";
import { Page, PageHeader } from "@src/components/layout/page";
import { Container } from "@src/components/ui/container";
import { BlogCard } from "@src/components/blog/blog-card";
import { Divider } from "@src/components/ui/divider";

const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <LayoutRoot>
      <Page>
        <Container className="container">
          <PageHeader
            badge="BLOG"
            title="Get precise knowledge wherever you are"
          />
          <Divider className="mt-[89px]" />
          {/* <BlogGrid className="mt-[90px] mb-[88px]" /> */}
          <Container className="my-[90px]">
            {data.allMdx.nodes.map((node) => {
              const hero_image = getImage(node.frontmatter.hero_image);
              const author_image = getImage(node.frontmatter.author_image);

              return (
                <BlogCard
                  heroImage={hero_image}
                  authorImage={author_image}
                  {...node}
                />
              );
            })}
          </Container>
        </Container>
      </Page>
    </LayoutRoot>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          reading_time
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          author_image_alt
          author_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => <title>Blog Page</title>;
