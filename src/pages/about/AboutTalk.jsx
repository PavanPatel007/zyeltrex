"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutTalk = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      }
    );

    // Hover animation
    const btn = buttonRef.current;
    const hoverIn = () => {
      gsap.to(btn, {
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const hoverOut = () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    btn.addEventListener("mouseenter", hoverIn);
    btn.addEventListener("mouseleave", hoverOut);

    return () => {
      btn.removeEventListener("mouseenter", hoverIn);
      btn.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <section
      className=" px-4  my-10 md:my-20  "
      ref={sectionRef}
      // style={{
      //   backgroundImage: "linear-gradient(80deg, var(--primary) 1%, #000 30%)",
      // }}
    >
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black container rounded-xl mx-auto max-w-7xl  py-14 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#0D1516] text-white">
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold"
            ref={textRef}
          >
            Let's Start a Conversation
          </h2>

          <p className=" text-base sm:text-lg mt-4 max-w-2xl">
            We specialize in building powerful brands by blending cultural
            insights, strategic vision, and emotional storytelling. Let's
            explore how we can amplify your brand's impact and connect with your
            audience on a deeper level.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="bg-black px-8 py-4 text-white font-semibold rounded-lg text-base sm:text-lg transition-all"
              ref={buttonRef}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTalk;
