import CTASection from "@/components/CTASection/CTASection";
import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import { SEO_DATA, SEO_IMAGES } from "@/config/seo";
import AIMLServicesCards from "@/pages/services/aimlservices/AIMLServicesCards";
import IndustrySection from "@/pages/services/aimlservices/IndustrySection";
import TechStackSection from "@/pages/services/aimlservices/TechStackSection";
import React from "react";

export const metadata = {
  title: SEO_DATA.aiMLDevelopment.title,
  description: SEO_DATA.aiMLDevelopment.description,
  keywords: SEO_DATA.aiMLDevelopment.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_DATA.aiMLDevelopment.title,
    description: SEO_DATA.aiMLDevelopment.description,
    url: SEO_DATA.aiMLDevelopment.url,
    siteName: SEO_DATA.siteName,
    images: [SEO_IMAGES.default],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: SEO_DATA.twitterHandle,
    creator: SEO_DATA.twitterHandle,
    title: SEO_DATA.aiMLDevelopment.title,
    description: SEO_DATA.aiMLDevelopment.description,
    images: [SEO_IMAGES.default.url],
  },
};

const page = () => {
  return (
    <div>
      {" "}
      <HeaderFull />
      <HeroSection
        title="AI/ML Development"
        subtitle=""
        // gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      <AIMLServicesCards />
      <TechStackSection />
      <div className="my-10">
        <CTASection
          title="Let us Build the Best for You"
          subtitle="We offer reliable and highly functional client-centric AI Development Services that transform your business models."
          bgColor="bg-black"
          textColor="text-white"
          buttonLabel="Contact Us"
          buttonLink="/contact"
        />
        <IndustrySection />
      </div>
    </div>
  );
};

export default page;
