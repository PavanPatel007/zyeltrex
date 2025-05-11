"use client";
import React from "react";
import { Icon } from "@iconify/react";

const ToolsWeUse = () => {
  const tools = [
    {
      name: "React",
      icon: "devicon:react-wordmark",
    },
    {
      name: "Node.js",
      icon: "logos:nodejs",
    },
    {
      name: "Vs code",
      icon: "devicon:vscode",
    },

    {
      name: "Docker",
      icon: "devicon:docker",
    },
    {
      name: "MongoDB",
      icon: "devicon:mongodb-wordmark",
    },
    {
      name: "Figma",
      icon: "logos:figma",
    },
    {
      name: "GraphQL",
      icon: "logos:graphql",
    },
    {
      name: "Webpack",
      icon: "logos:webpack",
    },
  ];

  return (
    <section className="py-14">
      <div className="container">
        <div className=" mb-16">
          <p className="text-black font-bold text-[25px] uppercase mb-4">
            Tools We Use
          </p>
          <h2 className="font-semibold text-[20px] leading-tight text-dark-gray">
            Building with the Best Tools for Development
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-8 bg-gray-100 p-5 rounded-xl"
            >
              <Icon
                icon={tool.icon}
                className="text-[60px] text-primary mb-4 transition-transform transform "
              />
              <p className="text-lg font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsWeUse;
