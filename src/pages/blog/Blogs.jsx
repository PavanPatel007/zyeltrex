import React from "react";
import BlogHome from "./BlogHome";
import BlogsCard from "./BlogCards";
import HeroSection from "@/components/HeroSection/HeroSection";

const Blogs = ({ blogs }) => {
  return (
    <div>
      {/* <BlogHome /> */}

      <HeroSection
        title="Latest News"
        subtitle="Insights and inspiration at your fingertips."
        // gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      <BlogsCard blogs={blogs} />
    </div>
  );
};

export default Blogs;
