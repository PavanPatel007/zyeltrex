import CTASection from "@/components/CTASection/CTASection";
import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import AIMLServicesCards from "@/pages/services/aimlservices/AIMLServicesCards";
import IndustrySection from "@/pages/services/aimlservices/IndustrySection";
import TechStackSection from "@/pages/services/aimlservices/TechStackSection";
import React from "react";

export const metadata = {
  title: "AI/ML Development Services | Zyeltrex Web Solution",
  description:
    "Leverage the power of Artificial Intelligence and Machine Learning with Zyeltrex. We deliver custom AI/ML solutions to optimize processes and drive business growth.",
  keywords: [
    "AI Development",
    "Machine Learning",
    "Artificial Intelligence",
    "AI Solutions",
    "ML Solutions",
    "Zyeltrex Web Solution",
    "AI for Business",
    "Predictive Analytics",
    "Deep Learning",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI/ML Development Services | Zyeltrex Web Solution",
    description:
      "Zyeltrex offers innovative AI/ML development services to help businesses optimize operations, improve decision-making, and unlock new opportunities with machine learning algorithms and artificial intelligence.",
    url: "https://www.zyeltrex.com/services/ai-ml-development",
    siteName: "Zyeltrex Web Solution",
    images: [
      {
        url: "https://www.zyeltrex.com/assets/images/og-ai-ml.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "AI/ML Development Services Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Zyeltrex",
    creator: "@Zyeltrex",
    title: "AI/ML Development Services | Zyeltrex Web Solution",
    description:
      "Unlock the potential of AI and ML with Zyeltrex. We provide tailored solutions to automate processes, enhance decision-making, and drive innovation for your business.",
    images: ["https://www.zyeltrex.com/assets/images/og-ai-ml.jpg"], // Replace with your image
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
        gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
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
