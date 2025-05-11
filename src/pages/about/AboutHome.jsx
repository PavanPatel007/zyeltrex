"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const AboutHome = () => {
  const imageWrapperRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Image Perspective Animation
    const handleMouseMove = (event) => {
      const rect = imageWrapperRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 1;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 1;

      const rotateX = y * 5;
      const rotateY = -x * 5;

      imageWrapperRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      imageWrapperRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    const wrapperElement = imageWrapperRef.current;
    wrapperElement.addEventListener("mousemove", handleMouseMove);
    wrapperElement.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners
    return () => {
      wrapperElement.removeEventListener("mousemove", handleMouseMove);
      wrapperElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    // Text Animation
    const text = headingRef.current;
    const letters = text.textContent.split("");
    text.innerHTML = letters
      .map(
        (letter) =>
          `<span style="display: inline-block; opacity: 0;">${letter}</span>`
      )
      .join("");

    const spans = text.querySelectorAll("span");

    gsap.to(spans, {
      x: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-6 lg:-mb-24 text-center z-10 relative">
          <h2
            ref={headingRef}
            className=" text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-medium max-w-[1100px] mx-auto"
          >
            We are a full-service reactive studio
          </h2>
        </div>

        {/* Image Wrapper */}
        <div
          ref={imageWrapperRef}
          className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[700px] overflow-hidden"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-out",
          }}
        >
          <Image
            src="/assets/images/aboutImage.png"
            fill
            className="w-full h-full object-cover rounded-lg"
            alt="about image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
