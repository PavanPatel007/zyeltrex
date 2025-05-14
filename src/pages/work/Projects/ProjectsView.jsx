import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import ProjectAbout from "./ProjectAbout";
import PropertyInspectionAbout from "./PropertyInspectionAbout";
import CTABlock from "./ProjectCTA";
import CTASection from "@/components/CTASection/CTASection";
import PropertyFeatureSection from "./PropertyFeatureSection";

const ProjectsView = ({ slug }) => {
  return (
    <div>
      <HeroSection
        title={slug}
        // subtitle="Explore our work."
      />

      <ProjectAbout />
      <PropertyInspectionAbout />
      {/* <CTABlock
        title="Ready to Build Your Property Inspection Website?"
        description="Partner with us to create a professional, user-friendly inspection platform that streamlines your business operations and delivers results."
      /> */}
      <PropertyFeatureSection />
      <CTASection
        title="Ready to Build Your Property Inspection Website?"
        subtitle="Partner with us to create a professional, user-friendly inspection platform that streamlines your business operations and delivers results."
        bgColor="bg-black"
        textColor="text-white"
        buttonLabel="Get In Touch"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ProjectsView;
