import React from "react";
import { Icon } from "@iconify/react";

const WebBenefits = () => {
  const benefits = [
    {
      icon: "mdi:monitor",
      label: "Modern Design",
      description: "Crafted for a sleek, modern, and visually appealing look.",
    },
    {
      icon: "mdi:shield-check",
      label: "Secure",
      description: "Advanced security measures to protect your data.",
    },
    {
      icon: "mdi:rocket-launch",
      label: "Fast Performance",
      description: "Optimized for speed to ensure seamless user experience.",
    },
    {
      icon: "mdi:web",
      label: "Responsive",
      description: "Fully adaptable across all devices and screen sizes.",
    },
    {
      icon: "mdi:cloud",
      label: "Cloud Integration",
      description:
        "Effortless integration with cloud platforms for scalability.",
    },
    {
      icon: "mdi:account-group",
      label: "User Friendly",
      description: "Designed with usability at the forefront for all users.",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="container  ">
        <h2 className="text-center text-4xl font-bold mb-12">
          Web Development Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col   space-y-4 px-6">
              <div className="text-primary text-6xl">
                <Icon icon={benefit.icon} />
              </div>
              <h3 className="text-xl font-semibold">{benefit.label}</h3>
              <p className="text-sm text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebBenefits;
