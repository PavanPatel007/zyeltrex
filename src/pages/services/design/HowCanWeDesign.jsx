"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HowCanWeDoIt = () => {
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
      title: "Research & Conceptualization",
      description:
        "We begin by understanding your design goals, target audience, and brand essence. This helps us create a strong foundation for the design process, ensuring alignment with your business objectives.",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "We design wireframes and interactive prototypes that allow you to visualize the structure and user flow of your digital product before finalizing the design.",
    },
    {
      title: "UI/UX Design",
      description:
        "We focus on crafting intuitive and aesthetically appealing UI designs. Our UX designs ensure seamless user journeys, creating a delightful experience across platforms.",
    },
    {
      title: "Branding & Visual Identity",
      description:
        "We develop strong brand identities by designing logos, typography, color schemes, and other visual elements that reflect your brand’s core values and set you apart in the market.",
    },
    {
      title: "Design Iteration & Refinement",
      description:
        "We continuously refine designs through client feedback and testing to achieve a perfect balance of form and function that speaks to your target audience.",
    },
    {
      title: "Final Design & Handoff",
      description:
        "Once the design is finalized, we prepare assets, design specifications, and guidelines, and hand them off for development to ensure a smooth transition from concept to execution.",
    },
  ];

  return (
    <section className="container py-14">
      <div ref={containerRef}>
        <div>
          <p className="text-primary font-bold text-[25px] uppercase mb-4">
            How do we approach design?
          </p>
          <h2 className="font-bold text-[50px] leading-tight">
            A meticulous approach to crafting meaningful and impactful designs.
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

export default HowCanWeDoIt;
