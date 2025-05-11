"use client";
import React, { useEffect, useRef } from "react";
import { siteInfo } from "@/config/siteConfig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutCollaborationSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-item");

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div className="py-14">
      <div ref={sectionRef} className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-8 space-y-8 md:space-y-0">
          {/* Section 1 */}
          <div className="flex flex-col text-center md:text-left animate-item">
            <h2 className="text-sm ">Looking for collaboration?</h2>
            <p className="text-lg uppercase font-semibold ">{siteInfo.name}</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-36 h-0.5 bg-white animate-item"></div>

          {/* Section 2 */}
          <div className="flex flex-col text-center md:text-left animate-item">
            <p className="text-sm ">{siteInfo.city}</p>
            <p className="text-lg font-semibold ">{siteInfo.phone}</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-36 h-0.5 bg-white animate-item"></div>

          {/* Section 3 */}
          <div className="flex flex-col text-center md:text-left animate-item">
            <p className="text-sm ">
              Looking for a job?{" "}
              <span className="font-semibold">Send your resume</span>
            </p>
            <p className="text-lg ">{siteInfo.email.career}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCollaborationSection;
