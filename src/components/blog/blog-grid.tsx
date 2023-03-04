import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { BlogCard } from "./blog-card";
import { cn } from "@src/lib/utils";

type Props = {
  className?: string;
};

export function BlogGrid({ className }: Props) {
  return (
    <ul
      className={cn(
        "grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[18px] gap-y-[50px]",
        className,
      )}
    >
      {blogLists.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </ul>
  );
}

export type BlogItem = {
  blogImage: JSX.Element;
  blogTitle: string;
  blogDescription: string;
  author: JSX.Element;
  authorName: string;
  date: string;
  readingTime: string;
};

const blogLists: BlogItem[] = [
  {
    blogImage: <StaticImage src="../../images/blog-1.png" alt="traffic" />,
    blogTitle: "10 Figma Plugins that will increase your productivity",
    blogDescription: "All these plugins are free and you can use them forever",
    author: <StaticImage src="../../images/author-1.png" alt="author" />,
    authorName: "Alex Berner",
    date: "Mar 11",
    readingTime: "3 min read",
  },
  {
    blogImage: <StaticImage src="../../images/blog-2.png" alt="traffic" />,
    blogTitle: "How to deploy a Node JS application to a VPS",
    blogDescription:
      "Step by step setting up the server and deploying the application",
    author: <StaticImage src="../../images/author-2.png" alt="author" />,
    authorName: "Anne Grane",
    date: "Mar 10",
    readingTime: "20 min read",
  },
  {
    blogImage: <StaticImage src="../../images/blog-3.png" alt="traffic" />,
    blogTitle: "SEO tricks that can increase the traffic of your website",
    blogDescription:
      "People have been using wrong SEO techniques on their websites.",
    author: <StaticImage src="../../images/author-3.png" alt="author" />,
    authorName: "Jane Cooper",
    date: "Mar 18",
    readingTime: "5 min red",
  },
  {
    blogImage: <StaticImage src="../../images/blog-4.png" alt="traffic" />,
    blogTitle: "How to compress image size without losing quality",
    blogDescription: "Small images can speed up website load times",
    author: <StaticImage src="../../images/author-4.png" alt="author" />,
    authorName: "Ban Steward",
    date: "Feb 20",
    readingTime: "8 min read",
  },
  {
    blogImage: <StaticImage src="../../images/blog-5.png" alt="traffic" />,
    blogTitle: "Why is Google still not recognizing my website?",
    blogDescription: "Improve the SEO techniques that you have used so far",
    author: <StaticImage src="../../images/author-5.png" alt="author" />,
    authorName: "Rob Arace",
    date: "Feb 19",
    readingTime: "12 min read",
  },
  {
    blogImage: <StaticImage src="../../images/blog-6.png" alt="traffic" />,
    blogTitle: "Monitor your application when errors occur in production",
    blogDescription: "Get accurate error messages when the application crashes",
    author: <StaticImage src="../../images/author-6.png" alt="author" />,
    authorName: "Don Rohiman",
    date: "Feb 7",
    readingTime: "9 min read",
  },
];
