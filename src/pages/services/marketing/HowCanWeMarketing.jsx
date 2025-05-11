"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HowCanWeMarketing = () => {
  const stepRefs = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    const steps = stepRefs.current;

    gsap.from(steps, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      delay: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const steps = [
    {
      title: "Market Research & Analysis",
      description:
        "We dive deep into understanding your industry, audience, and competitors to craft data-driven marketing strategies.",
    },
    {
      title: "Strategic Planning",
      description:
        "We develop a comprehensive marketing roadmap, outlining goals, channels, and tactics to achieve maximum ROI.",
    },
    {
      title: "Content Creation",
      description:
        "From blogs to videos, we create engaging content that resonates with your target audience and drives conversions.",
    },
    {
      title: "Campaign Management",
      description:
        "We launch and manage multi-channel marketing campaigns, ensuring optimal performance and alignment with your goals.",
    },
    {
      title: "Performance Tracking & Optimization",
      description:
        "We continuously monitor campaign results, analyze data, and refine strategies for better outcomes.",
    },
    {
      title: "Brand Growth & Sustainability",
      description:
        "Our long-term strategies focus on building your brand's credibility, loyalty, and market presence.",
    },
  ];

  return (
    <section className="container py-14">
      <div ref={containerRef}>
        <div>
          <p className="text-primary font-bold text-[25px] uppercase mb-4">
            How do we approach marketing?
          </p>
          <h2 className="font-bold text-[50px] leading-tight">
            A strategic approach to achieving impactful marketing results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="rounded-xl p-6 h-full transition-transform cursor-pointer relative bg-gray-50"
            >
              <div className="flex items-center border-b-2 border-primary mb-3 pb-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h5 className="text-2xl font-bold text-black ml-3">
                  {step.title}
                </h5>
              </div>
              <p className="text-sm font-medium text-dark-gray mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowCanWeMarketing;
