"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Customized = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const h2 = h2Ref.current;
    const h3 = h3Ref.current;
    const container = containerRef.current;

    if (!container || !image || !h2 || !h3) return; // Guard clause

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom+=500 top",
        scrub: true,
        pin: false,

        onKill: (self) => {
          scrollTriggerRef.current = null;
        },
      },
    });

    scrollTriggerRef.current = timeline.scrollTrigger; // Store a reference to the ScrollTrigger

    // Image Shrinking and Pinning
    timeline.to(image, {
      scale: 0.7,
      transformOrigin: "center bottom",
      ease: "power3.out",
    });

    timeline.from(h3, {
      y: "-600",
    });

    // h2 Animation (Move up, center, then go down)
    timeline
      .fromTo(
        h2,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<"
      )
      .to(h2, { y: 900, opacity: 0, duration: 1, ease: "power3.in" });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill(); // Kill the ScrollTrigger instance
      }
      timeline.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative  overflow-hidden ">
      {/* h3 Behind Image */}
      <h3
        ref={h3Ref}
        className="absolute top-24  left-0 w-full text-center text-4xl font-bold text-black z-10"
      >
        for your brand
      </h3>

      {/* Image */}
      <div
        ref={imageRef}
        className="relative w-full h-screen overflow-hidden z-0"
      >
        <Image
          src="/assets/images/meeting.png"
          alt="meeting"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* h2 Overlay Animation */}
      <h2
        ref={h2Ref}
        className="absolute top-1/2 left-1/2 text-4xl sm:text-5xl lg:text-7xl font-bold text-white z-20 text-center"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        Customized <br />
        solutions.
      </h2>
    </div>
  );
};

export default Customized;
