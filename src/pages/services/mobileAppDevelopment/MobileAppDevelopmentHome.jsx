"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MobileAppDevelopmentHome = () => {
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
      <div className="h-[500px] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('/assets/bg/agency.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-white text-[60px] md:text-[130px] font-bold text-center about-text leading-none">
            Mobile
            <br /> Development
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopmentHome;
