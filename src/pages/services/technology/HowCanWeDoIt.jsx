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
      title: "Consultation and Planning",
      description:
        "First, we learn about your business, goals and target audiences. A web design strategy tailored to your business goals will come from our experts, who will condense and analyze all necessary business information.",
    },
    {
      title: "Wireframing and Design",
      description:
        "Once your needs are understood well, we proceed to wireframing and design. We design, a beautiful and functional design that connects with your audience.",
    },
    {
      title: "Development and Testing",
      description:
        "Once we receive approval for the design, our developers build it out. The site is built using latest technologies giving the whole site fast, secure and easy to maintain. Not only that, we test the site on various devices and browsers to ensure that everything runs smoothly.",
    },
    {
      title: "Launch and Maintenance",
      description:
        "Then, we launch your website — after testing everything and making sure everything is good to go! We don't just stop at creating your site – we also provide ongoing maintenance to keep your site updated and to perform well in the longer term.",
    },
    // {
    //   title: "Successful Deployment",
    //   description:
    //     "We unlock the best tech-driven solutions that stand the test of time across multiple environments, including staging and production.",
    // },
    // {
    //   title: "AMC Support",
    //   description:
    //     "Our experts ensure smooth app performance and provide foolproof AMC support with hassle-free backend integration.",
    // },
  ];

  return (
    <section className="container py-14">
      <div ref={containerRef}>
        <div>
          <p className="text-primary font-bold text-[25px] uppercase mb-4">
            How can we do it?
          </p>
          <h2 className="font-bold text-[50px] leading-tight">
            Going the extra mile with an extra bit of effort at every step.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="rounded-xl p-6 h-full transition-transform cursor-pointer   relative bg-gray-50"
            >
              <div className="flex items-center border-b-2 border-primary mb-3 pb-3">
                <div className=" w-7 h-7 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
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
