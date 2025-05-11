"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MakeBusiness = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useGSAP(() => {
    const animateInView = (ref, delay = 0) => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    };

    animateInView(step1Ref);
    animateInView(step2Ref, 0.2);
    animateInView(step3Ref, 0.4);
  });

  return (
    <div className="container mx-auto py-20 px-6 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Step 1 */}
        <div
          ref={step1Ref}
          className="p-6  border rounded-3xl border-gray-300  hover:shadow-lg transition-all"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Build a Strong Online Presence
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Unlock growth with an impactful online identity. Elevate your brand
            through SEO, social media, and high-converting digital campaigns
            that connect with your audience.
          </p>
        </div>

        {/* Step 2 */}
        <div
          ref={step2Ref}
          className="p-6  border rounded-3xl border-gray-300  hover:shadow-lg transition-all"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Make Your Brand Stand Out
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Craft memorable experiences with bold branding, user-centric design,
            and data-driven marketing. Set yourself apart and inspire customer
            loyalty like never before.
          </p>
        </div>

        {/* Step 3 */}
        <div
          ref={step3Ref}
          className="p-6  border rounded-3xl border-gray-300  hover:shadow-lg transition-all"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Scale with Your Community
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Turn audiences into advocates. Foster meaningful relationships,
            evolve your offerings, and grow sustainably alongside the customers
            who believe in you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeBusiness;
