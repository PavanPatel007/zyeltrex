import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import { SEO_DATA, SEO_IMAGES } from "@/config/seo";
import AboutTalk from "@/pages/about/AboutTalk";
import HomeTextMarquee from "@/pages/home/HomeTextMarquee";
import WebAnalysis from "@/pages/services/webDevelopment/WebAnalysis";
import WebBenefits from "@/pages/services/webDevelopment/webBenefits";

export const metadata = {
  title: SEO_DATA.webDevelopment.title,
  description: SEO_DATA.webDevelopment.description,
  keywords: SEO_DATA.webDevelopment.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_DATA.webDevelopment.title,
    description: SEO_DATA.webDevelopment.description,
    url: SEO_DATA.webDevelopment.url,
    siteName: SEO_DATA.siteName,
    images: [SEO_IMAGES.default],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: SEO_DATA.twitterHandle,
    creator: SEO_DATA.twitterHandle,
    title: SEO_DATA.webDevelopment.title,
    description: SEO_DATA.webDevelopment.description,
    images: [SEO_IMAGES.default.url],
  },
};

const page = () => {
  return (
    <>
      <HeaderFull />
      {/* <WebDevelopmentHome /> */}
      <HeroSection
        title="Web Development"
        subtitle=""
        gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      <WebAnalysis />
      <WebBenefits />
      <div className="">
        {/* <HomeTextMarquee /> */}
        <HomeTextMarquee />
      </div>
      <div className="my-10">
        <AboutTalk />
      </div>
      {/* <ProjectsSlider /> */}
    </>
  );
};

export default page;
