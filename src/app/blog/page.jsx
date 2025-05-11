import HeaderFull from "@/components/Header/HeaderFull";
import { SEO_DATA, SEO_IMAGES } from "@/config/seo";
import { blogsData } from "@/data/blogs";
import Blogs from "@/pages/blog/Blogs";

export const metadata = {
  title: SEO_DATA.blog.title,
  description: SEO_DATA.blog.description,
  keywords: SEO_DATA.blog.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_DATA.blog.title,
    description: SEO_DATA.blog.description,
    url: SEO_DATA.blog.url,
    siteName: SEO_DATA.siteName,
    images: [SEO_IMAGES.default],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: SEO_DATA.twitterHandle,
    creator: SEO_DATA.twitterHandle,
    title: SEO_DATA.blog.title,
    description: SEO_DATA.blog.description,
    images: [SEO_IMAGES.default.url],
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
