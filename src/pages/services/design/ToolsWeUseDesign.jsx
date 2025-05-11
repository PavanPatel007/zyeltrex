"use client";
import React from "react";
import { Icon } from "@iconify/react";

const ToolsWeUseDesign = () => {
  const tools = [
    {
      name: "Figma",
      icon: "logos:figma",
    },
    {
      name: "Adobe XD",
      icon: "logos:adobe-xd",
    },
    {
      name: "Sketch",
      icon: "logos:sketch",
    },
    {
      name: "InVision",
      icon: "logos:invision",
    },
    {
      name: "Photoshop",
      icon: "devicon:photoshop",
    },
    {
      name: "Illustrator",
      icon: "skill-icons:illustrator",
    },
    {
      name: "Corel Draw",
      icon: "simple-icons:coreldraw",
    },
    {
      name: "Canva",
      icon: "devicon:canva",
    },
  ];

  return (
    <section className="py-14">
      <div className="container">
        <div className="mb-16">
          <p className="text-primary font-bold text-[25px] uppercase mb-4">
            Tools We Use
          </p>
          <h2 className="font-semibold text-[20px] leading-tight text-dark-gray">
            Building with the Best Tools for Design
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-8 bg-gray-100 p-5 rounded-xl"
            >
              <Icon
                icon={tool.icon}
                className="text-[60px] text-primary mb-4 transition-transform transform"
              />
              <p className="text-lg font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsWeUseDesign;
