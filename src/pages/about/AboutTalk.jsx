"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutTalk = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
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
          toggleActions: "play none none reverse",
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
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
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
        delay: 0.5, // Delay for smooth transition
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      className="bg-[#0D1516] text-white py-14 m-20 rounded-xl"
      ref={sectionRef}
      style={{
        backgroundImage: "linear-gradient(80deg, var(--primary) 1%, #000 30%)",
      }}
    >
      <div className="container">
        <div className="text-center w-full flex items-center justify-center flex-col">
          <div className="text-center">
            <h2 className="text-[58px] text-white" ref={textRef}>
              Let's Start a Conversation
            </h2>
          </div>

          <div className="max-w-xl mx-auto mt-3 md:mt-3 md:text-right">
            <p className="text-[#FFFFFF80] text-base md:text-lg text-center">
              We specialize in building powerful brands by blending cultural
              insights, strategic vision, and emotional storytelling. Let's
              explore how we can amplify your brand's impact and connect with
              your audience on a deeper level.
            </p>
            <div className="mt-10 text-center">
              <Link
                className="bg-primary p-6 2xl:px-[40px] xl:py-[20px] text-black font-semibold rounded-lg"
                href="#"
                ref={buttonRef}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTalk;
