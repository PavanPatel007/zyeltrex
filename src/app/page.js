// "use client";
import CollaborationSection from "@/components/CollaborationSection/CollaborationSection";
import FallingText from "@/components/FallingText/FallingText";
import HeaderFull from "@/components/Header/HeaderFull";
import ProjectsSlider from "@/components/ProjectsSlider/ProjectsSlider";
import { projects } from "@/data/projects";
import CreatingValuable from "@/pages/home/CreatingValuable";
import Customized from "@/pages/home/Customized";
import HomeHeroNewBlack from "@/pages/home/HomeHeroBlack";
import HomeHeroSlider from "@/pages/home/HomeHeroSlider";
import HomeTestimonials from "@/pages/home/HomeTestimonials";
import HomeTextMarquee from "@/pages/home/HomeTextMarquee";
import ImageContentScroll from "@/pages/home/ImageContentScroll";
import MakeBusiness from "@/pages/home/MakeBusiness";
import Projects from "@/pages/work/Projects";
import ProjectsBg from "@/pages/work/ProjectsBg";

export const metadata = {
  title: "Zyeltrex  Solutions",
  description: "Zyeltrex  Solutions",
};

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <HeaderCap /> */}
      <HeaderFull />
      {/* <HomeHeroSlider /> */}
      <HomeHeroNewBlack />
      <CreatingValuable />
      {/* <HomeClientLogos /> */}
      <ImageContentScroll />
      <MakeBusiness />
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
