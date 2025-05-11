"use client";
import React from "react";
import { Icon } from "@iconify/react";

const ToolsWeUseMarketing = () => {
  const tools = [
    {
      name: "Google Analytics",
      icon: "logos:google-analytics",
    },
    {
      name: "HubSpot",
      icon: "logos:hubspot",
    },
    {
      name: "Mailchimp",
      icon: "logos:mailchimp",
    },
    {
      name: "Hootsuite",
      icon: "logos:hootsuite-icon",
    },
    {
      name: "SEMRush",
      icon: "simple-icons:semrush",
    },
    {
      name: "Canva",
      icon: "devicon:canva",
    },
    {
      name: "Facebook",
      icon: "logos:facebook",
    },
    {
      name: "Instagram",
      icon: "skill-icons:instagram",
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
            Empowering Marketing with the Best Tools in the Industry
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
                className="text-[60px] text-primary mb-4 transition-transform transform max-w-[100px]"
              />
              <p className="text-lg font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsWeUseMarketing;
