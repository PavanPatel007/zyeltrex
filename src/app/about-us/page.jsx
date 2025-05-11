import CollaborationSection from "@/components/CollaborationSection/CollaborationSection";
import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import { SEO_DATA, SEO_IMAGES } from "@/config/seo";
import AboutInfo from "@/pages/about/AboutInfo";
import AboutInnovation from "@/pages/about/AboutInnovation";
import AboutTalk from "@/pages/about/AboutTalk";

export const metadata = {
  title: SEO_DATA.about.title,
  description: SEO_DATA.about.description,
  keywords: SEO_DATA.about.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_DATA.about.title,
    description: SEO_DATA.about.description,
    url: SEO_DATA.about.url,
    siteName: SEO_DATA.siteName,
    images: [SEO_IMAGES.default],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: SEO_DATA.twitterHandle,
    creator: SEO_DATA.twitterHandle,
    title: SEO_DATA.about.title,
    description: SEO_DATA.about.description,
    images: [SEO_IMAGES.default.url],
  },
};
const page = () => {
  return (
    <>
      {" "}
      {/* <Header /> */}
      <HeaderFull />
      <HeroSection
        title="About Us"
        subtitle="Transforming Ideas into Digital Solutions"
        gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      {/* <AboutHome /> */}
      <AboutInfo />
      <AboutInnovation />
      {/* <AboutBeyond /> */}
      {/* <AboutTeam /> */}
      {/* <AboutTestimonials /> */}
      <CollaborationSection />
      <AboutTalk />
    </>
  );
};

export default page;
