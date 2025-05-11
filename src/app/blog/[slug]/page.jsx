import Header from "@/components/Header/Header";
import HeaderFull from "@/components/Header/HeaderFull";
import { SEO_DATA } from "@/config/seo";
import { SITE_BASE_URL } from "@/config/siteConfig";
import { blogsData } from "@/data/blogs";
import BlogView from "@/pages/blog/BlogView";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData?.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog?.meta?.description || "",
    keyword: blog.meta.keywords,
    alternates: {
      canonical: `${SITE_BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog?.meta?.description || "",
      url: `${SITE_BASE_URL}/blog/${slug}`,
      siteName: SEO_DATA.siteName,
      images: [
        {
          url: blog.image || `${SITE_BASE_URL}/assets/blog/blog-bg.jpeg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@zyeltrex",
      title: blog.title,
      description: blog?.meta?.description || "",
      image: blog.image || `${SITE_BASE_URL}/assets/blog/blog-bg.jpeg`,
    },
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const blog = blogsData?.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      {/* <Header /> */}
      <HeaderFull />
      <BlogView blog={blog} blogs={blogsData} />
    </div>
  );
};
export default page;
