import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BlogItem } from "./blog-grid";

type Props = {} & BlogItem;

export function BlogCard({
  excerpt,
  frontmatter,
  heroImage,
  authorImage,
  ...rest
}: any) {
  return (
    <article className="relative max-w-[328px]" {...rest}>
      <GatsbyImage image={heroImage} alt={frontmatter.hero_image_alt} />
      <h2 className="blog-title mt-[30px] text-white">{frontmatter.title}</h2>
      <p className="blog-lead mt-[10px] text-muted">{excerpt}</p>
      <div className="mt-[30px] flex items-center gap-x-[21px]">
        <GatsbyImage image={authorImage} alt={frontmatter.author_image_alt} />
        <div>
          <h4 className="text-base font-semibold text-white">
            {frontmatter.author_name}
          </h4>
          <div className="mt-[5px] flex items-center">
            <span className="blog-meta text-muted">{frontmatter.date}</span>
            <span className="mx-[10px] inline-block h-1 w-1 rounded-full bg-muted" />
            <span className="blog-meta text-muted">
              {frontmatter.reading_time}
            </span>
          </div>
        </div>
      </div>
      <Link to={frontmatter.slug} className="absolute inset-0"></Link>
    </article>
  );
}
