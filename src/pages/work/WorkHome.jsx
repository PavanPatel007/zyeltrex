"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const WorkHome = () => {
  useGSAP(() => {
    gsap.from(".about-text", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <div className="relative group overflow-hidden">
      {/* Wrapper for background and text */}
      <div className="md:h-[500px] lg:h-[600px] relative overflow-hidden m-5 md:ml-14 rounded-2xl">
        {/* Background Image */}
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('/assets/bg/ourwork.jpeg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-white text-[60px] md:text-[130px] font-bold text-center about-text">
            Our Work
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorkHome;
