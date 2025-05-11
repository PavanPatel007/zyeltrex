import React from "react";

import Header from "@/components/Header/Header";
import { blogsData } from "@/data/blogs";
import Blogs from "@/pages/blog/Blogs";
import { SEO_DATA } from "@/config/seo";
import { SITE_BASE_URL } from "@/config/siteConfig";
import HeaderFull from "@/components/Header/HeaderFull";

export const metadata = {
  title: SEO_DATA.blog.title,
  description: SEO_DATA.blog.description,
  keywords: SEO_DATA.blog.keywords,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_PATH}/blog`,
  },
  authors: SEO_DATA.authors,
  openGraph: {
    title: SEO_DATA.blog.title,
    description: SEO_DATA.blog.description,
    url: `${process.env.NEXT_PUBLIC_BASE_PATH}/blog`,
    siteName: SEO_DATA.siteName,
    images: [
      {
        url: `${SITE_BASE_URL}/assets/blog/blog-bg.jpeg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zyeltrex",
    title: SEO_DATA.blog.title,
    description: SEO_DATA.blog.description,
    image: `${SITE_BASE_URL}/assets/blog/blog-bg.jpeg`,
  },
};

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeaderFull />
      <Blogs blogs={blogsData} />
    </div>
  );
};

export default page;
