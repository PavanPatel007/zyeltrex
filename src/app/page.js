// "use client";
import CollaborationSection from "@/components/CollaborationSection/CollaborationSection";
import HeaderFull from "@/components/Header/HeaderFull";
import CreatingValuable from "@/pages/home/CreatingValuable";
import Customized from "@/pages/home/Customized";
import HomeTestimonials from "@/pages/home/HomeTestimonials";
import HomeTextMarquee from "@/pages/home/HomeTextMarquee";
import HowWeWork from "@/pages/home/HowWeWork";
import ImageContentScroll from "@/pages/home/ImageContentScroll";
import HeroSection from "../pages/home/HomeHero";
import { SEO_META_URL } from "@/config/seo";

export const metadata = {
  title: "Zyeltrex Solutions",
  description:
    "We design solutions that scale and perform for your digital future.",
  metadataBase: new URL(SEO_META_URL),
  openGraph: {
    title: "Zyeltrex Solutions",
    description:
      "We design solutions that scale and perform for your digital future.",
    url: SEO_META_URL,
    siteName: "Zyeltrex Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyeltrex Solutions",
    description:
      "We design solutions that scale and perform for your digital future.",
  },
};

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <HeaderCap /> */}
      <HeaderFull />
      {/* <HomeHeroSlider /> */}
      {/* <HomeMain /> */}
      <HeroSection />
      {/* <HomeHeroNewBlack /> */}
      <CreatingValuable />
      {/* <HomeClientLogos /> */}
      <ImageContentScroll />
      <HowWeWork />
      {/* <MakeBusiness /> */}
      <HomeTextMarquee />

      <Customized />

      {/* <div className="block">
        <ProjectsBg
          projects={[
            ...(Array.isArray(projects) ? projects.slice(0, 5) : []),
            {
              title: "See more",
              siteLink: "/our-work",
              image: "images/projects.jpg",
              description:
                "We have designed experiences for over 100+ projects.",
              bgColor: "#FFF",
            },
          ]}
        />
      </div> */}
      {/* <OurPortfolio /> */}
      <HomeTestimonials />
      <CollaborationSection />
      {/* <ProjectsSlider /> */}
    </>
  );
}
