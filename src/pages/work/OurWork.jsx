import React from "react";
import WorkHome from "./WorkHome";
import QueTitle from "@/components/QueTitle/QueTitle";
import Projects from "./Projects";
import RoundedLetsTalk from "@/components/RoundedLetsTalk/RoundedLetsTalk";
import ProjectsBg from "./ProjectsBg";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutTalk from "../about/AboutTalk";

const OurWork = ({ projects }) => {
  return (
    <>
      {/* <WorkHome /> */}
      <HeroSection
        title="Selected Work"
        subtitle="Explore our work."
        // gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      <QueTitle
        title="Our Work"
        description="We have designed experiences for over 260 projects."
      />
      {/* <Projects /> */}
      <ProjectsBg projects={projects} />
      {/* <RoundedLetsTalk /> */}
      <AboutTalk />
    </>
  );
};

export default OurWork;
