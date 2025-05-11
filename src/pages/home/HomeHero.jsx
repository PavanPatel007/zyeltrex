"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ROUTE } from "@/routes/routes";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: "power2.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 flex flex-col items-center text-center">
        <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Empower Your Digital Journey
        </h1>
        <p className="hero-subtitle mt-6 text-lg sm:text-xl lg:text-2xl max-w-2xl">
          Discover innovative solutions tailored to elevate your online
          presence.
        </p>
        <div className="hero-cta mt-8 flex space-x-4">
          <Link
            href={ROUTE.contact}
            className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* Decorative 3D Illustration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-hero-3d bg-no-repeat bg-contain bg-right opacity-20 pointer-events-none"></div>
    </section>
  );
}
