"use client";
import React, { useRef, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
// import { projects } from "@/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projects }) => {
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

      const cardWidth = projectCards[0].offsetWidth + 32;
      const totalWidth = cardWidth * projects.length;

      gsap.to(projectsContainer, {
        x: () => -(totalWidth - projectsContainer.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: projectsContainer,
          start: "top 10%",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 2,
        },
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
    <div className="main overflow-hidden">
      <div
        ref={projectsContainerRef}
        className="projects-container flex gap-4 h-full"
      >
        {projects?.map((project, index) => (
          <div key={index} className="project-card min-w-[500px] h-full">
            <ProjectCard
              bgColor={project.bgColor}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.siteLink}
              from={project?.from}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
