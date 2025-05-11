import CollaborationSection from "@/components/CollaborationSection/CollaborationSection";
import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import { SEO_DATA, SEO_IMAGES } from "@/config/seo";
import AboutTalk from "@/pages/about/AboutTalk";
import ChooseStack from "@/pages/services/mobileAppDevelopment/ChooseStack";
import MobileAnalystics from "@/pages/services/mobileAppDevelopment/MobileAnalystics";
import MobileBenefits from "@/pages/services/mobileAppDevelopment/MobileBenefits";

export const metadata = {
  title: SEO_DATA.mobileAppDevelopment.title,
  description: SEO_DATA.mobileAppDevelopment.description,
  keywords: SEO_DATA.mobileAppDevelopment.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_DATA.mobileAppDevelopment.title,
    description: SEO_DATA.mobileAppDevelopment.description,
    url: SEO_DATA.mobileAppDevelopment.url,
    siteName: SEO_DATA.siteName,
    images: [SEO_IMAGES.default],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: SEO_DATA.twitterHandle,
    creator: SEO_DATA.twitterHandle,
    title: SEO_DATA.mobileAppDevelopment.title,
    description: SEO_DATA.mobileAppDevelopment.description,
    images: [SEO_IMAGES.default.url],
  },
};

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderFull />
      {/* <MobileAppDevelopmentHome /> */}
      <HeroSection
        title="Mobile App Development"
        subtitle=""
        gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      <ChooseStack />
      <MobileAnalystics />
      <MobileBenefits />
      <CollaborationSection />
      <div className="my-10">
        <AboutTalk />
      </div>
    </>
  );
};

export default page;
