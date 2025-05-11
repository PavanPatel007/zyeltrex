"use client";
import React, { useRef, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsBg = ({ projects }) => {
  const projectsContainerRef = useRef(null);

  useEffect(() => {
    const projectsContainer = projectsContainerRef.current;

    if (!projectsContainer) return;

    requestAnimationFrame(() => {
      const projectCards = projectsContainer.querySelectorAll(".project-card");

      if (projectCards.length === 0) {
        console.error("No project cards found.");
        return;
      }

      // Loop through each project card and add scroll-triggered animations
      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100, // Start from below
          },
          {
            opacity: 1,
            y: 0, // End at normal position
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "bottom top",
              scrub: 1, // Smooth scroll scrub effect
            },
          }
        );
      });
    });

    return () => {
      const allScrollTriggers = ScrollTrigger.getAll();
      if (allScrollTriggers) {
        allScrollTriggers.forEach((st) => st.kill());
      }
    };
  }, []);

  return (
    <div ref={projectsContainerRef} className="container py-14 space-y-8">
      {/* Use Grid Layout for Two Cards Per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects?.map((project, index) => (
          <div
            key={index}
            className={`project-card flex flex-col items-center gap-8`}
            data-bgcolor={project.bgColor}
            data-textcolor="black"
          >
            {/* ProjectCard Component */}
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.siteLink}
              bgColor={project.bgColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsBg;
