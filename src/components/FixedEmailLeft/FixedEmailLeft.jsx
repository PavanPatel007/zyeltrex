"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { siteInfo } from "@/config/siteConfig";
import { usePathname } from "next/navigation";

const FixedEmailLeft = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const path = usePathname();

  const lineHeight = 50; // Height of the line in pixels

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".scroll-arrow", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  });

  useEffect(() => {
    const position = (scrollProgress / 100) * lineHeight;
    gsap.to(".scroll-dot", {
      y: position,
      ease: "power1.out",
      duration: 0.3,
    });
  }, [scrollProgress]);

  // Determine the color based on the pathname
  const isAboutUs = path === "/about-us";
  const textColor = isAboutUs ? "text-white" : "text-black";
  const bgColor = isAboutUs ? "bg-white" : "bg-black";

  return (
    <div className="fixed hidden lg:flex left-0 top-0 h-screen w-16 flex-col items-center justify-between z-10">
      {/* Spacer */}
      <div className="mt-4"></div>

      {/* Center Email */}
      <div className=" flex-col items-center justify-center hidden">
        <div
          className={`-rotate-90 ${textColor} text-base tracking-wider font-medium mix-blend-exclusion`} // Added mix-blend-mode
        >
          {siteInfo.email.info}
        </div>
      </div>

      {/* Scroll Animation */}
      <div className="flex flex-col items-center justify-center mb-4">
        <div
          className={`-rotate-90 scroll-arrow ${textColor} text-sm mb-6 mix-blend-multiply`}
        >
          scroll
        </div>
        <div
          className="relative w-0.5 bg-gray-300"
          style={{ height: `${lineHeight}px` }}
        >
          {/* Moving dot */}
          <div
            className={`scroll-dot w-2 h-2 ${bgColor} rounded-full absolute left-1/2 transform -translate-x-1/2 mix-blend-overlay`} // Added mix-blend-mode
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FixedEmailLeft;
