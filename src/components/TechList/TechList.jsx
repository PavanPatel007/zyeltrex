"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceLink from "../ServiceLink/ServiceLink";

gsap.registerPlugin(ScrollTrigger);

const TechList = ({ services, title }) => {
  const containerRef = useRef(null);
  const serviceRefs = useRef([]);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        markers: false, // Set to true for debugging
      },
    });

    tl.fromTo(
      containerRef.current.querySelector("h2"),
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );

    serviceRefs.current.forEach((service, index) => {
      tl.fromTo(
        service,
        { opacity: 0, x: index % 2 === 0 ? 100 : -100, y: 50 },
        { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out" },
        `-=${0.8}` // Overlapping effect
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="container py-14">
      <div>
        <h2 className="text-black font-bold text-[25px] mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services?.map((service, index) => (
            <div key={index} ref={(el) => (serviceRefs.current[index] = el)}>
              <ServiceLink
                href={service.href}
                label={service.label}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechList;
