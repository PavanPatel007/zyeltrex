"use client";
import React, { useRef } from "react";
import { siteInfo } from "@/config/siteConfig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CollaborationSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-item");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <div className="py-14">
      <div ref={sectionRef} className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-8 space-y-8 md:space-y-0">
          {/* Section 1 */}
          <div className="flex flex-col text-center md:text-left animate-item">
            <h2 className="text-sm text-[#494B5D]">
              Looking for collaboration?
            </h2>
            <p className="text-lg uppercase font-semibold">{siteInfo.name}</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-36 h-0.5 bg-black animate-item"></div>

          {/* Section 2 */}
          <div className="flex flex-col text-center md:text-left animate-item">
            <p className="text-sm text-[#494B5D]">{siteInfo.city}</p>
            <p className="text-lg font-semibold">{siteInfo.phone}</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-36 h-0.5 bg-black animate-item"></div>

          {/* Section 3 */}
          <div className="flex flex-col text-center md:text-left animate-item">
            <p className="text-sm text-[#494B5D]">
              Get in touch with us !{" "}
              {/* <span className="font-semibold">
                — we're ready to collaborate!
              </span> */}
            </p>
            <p className="text-lg">{siteInfo.email.career}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
