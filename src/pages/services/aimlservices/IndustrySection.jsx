"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const industries = [
  {
    title: "Gaming",
    icon: "mdi:gamepad-variant",
    description:
      "AI transforms gaming with real-time decision-making, smart NPCs, and immersive personalized gameplay.",
  },
  {
    title: "FinTech",
    icon: "mdi:bank-transfer",
    description:
      "We bring intelligent fraud detection, algorithmic trading, and personalized finance tools to the FinTech world.",
  },
  {
    title: "Ed-Tech",
    icon: "mdi:school-outline",
    description:
      "Empowering education platforms with adaptive learning, AI tutoring, and student performance prediction.",
  },
  {
    title: "Healthcare",
    icon: "mdi:heart-pulse",
    description:
      "Revolutionizing healthcare with AI-driven diagnostics, predictive analytics, and personalized treatment solutions.",
  },
  {
    title: "Esports",
    icon: "mdi:trophy-outline",
    description:
      "Enhancing esports with performance analytics, AI coaching tools, and audience engagement technologies.",
  },
  {
    title: "Real Estate",
    icon: "mdi:home-city-outline",
    description:
      "Leveraging AI for property valuation, virtual tours, and smart investment recommendations in real estate.",
  },
  {
    title: "Creative Media",
    icon: "mdi:palette-outline",
    description:
      "AI in creative media enables automated editing, content generation, and personalized media experiences.",
  },
];

const IndustrySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={`/assets/images/flutter.jpg`}
            alt="Industries We Serve"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content with Accordion */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We are Successfully Serving Every Industry.
          </h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg">
            As the best AI and ML development company, we aim to craft the best
            AI/ML solutions for our clients to empower them with sustainable
            innovation.
          </p>

          <div className="space-y-4">
            {industries.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-3 text-lg md:text-xl font-semibold">
                    <Icon
                      icon={item.icon}
                      className="text-primary"
                      width={24}
                      height={24}
                    />
                    {item.title}
                  </div>
                  <Icon
                    icon={
                      activeIndex === index
                        ? "mdi:chevron-up"
                        : "mdi:chevron-down"
                    }
                    width={24}
                    height={24}
                    className="text-gray-600"
                  />
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4 text-gray-700 text-sm md:text-base">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
