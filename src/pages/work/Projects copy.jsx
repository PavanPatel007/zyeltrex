"use client";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import React from "react";

const Projectsold = () => {
  const handleViewClick = (title) => {
    alert(`Viewing details for: ${title}`);
  };

  return (
    <div className="container py-14 space-y-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
            onViewClick={() => handleViewClick(project.title)}
          />
        </div>
      ))}
    </div>
  );
};

export default Projectsold;
