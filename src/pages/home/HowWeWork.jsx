"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Uncovering Your Business Needs",
    description:
      "We begin by understanding your vision, goals, and user needs. Zyeltrex Solutions takes a consultative approach to uncover challenges and value opportunities.",
  },
  {
    icon: "mdi:map-marker-path",
    title: "Developing Your Custom Software Roadmap",
    description:
      "Our specialists collaborate with you to create a user-focused prototype. Every touchpoint is crafted to align with your strategic direction.",
  },
  {
    icon: "mdi:code-tags",
    title: "Building High-Quality Software",
    description:
      "We adopt agile methodologies to transform designs into scalable software. Each sprint delivers measurable progress and iterative improvements.",
  },
  {
    icon: "mdi:check-decagram",
    title: "Ensuring Quality and User Satisfaction",
    description:
      "Rigorous testing, code reviews, and performance optimization ensure your software is robust, user-friendly, and bug-free.",
  },
  {
    icon: "mdi:rocket-launch",
    title: "Launching and Supporting Success",
    description:
      "We deploy seamlessly and support long-term growth with updates, maintenance, and enhancements based on real user feedback.",
  },
];

export default function HowWeWork() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".step-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white" id="how-we-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">How We Work</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Zyeltrex Solutions blends creativity and strategy into every project
            using a structured, proven process.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Timeline for desktop (lg) and larger screens */}
          <div className="lg:border-l-4 lg:border-primary/30 lg:ml-4 space-y-10 lg:space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="w-full   md:pl-10 step-card">
                <div className="">
                  {/* Timeline icon */}
                  <span className="hidden lg:flex absolute -left-5 top-0 w-10 h-10  items-center justify-center bg-primary text-white rounded-full shadow-md">
                    <Icon icon={step.icon} className="w-5 h-5" />
                  </span>

                  <div className=" p-6 border rounded-3xl border-gray-300  transition-all">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Timeline for mobile and tablet */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start">
                {/* Icon for mobile view */}
                <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-md mb-4">
                  <Icon icon={step.icon} className="w-5 h-5" />
                </div>

                {/* Step title and description for mobile */}
                <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
