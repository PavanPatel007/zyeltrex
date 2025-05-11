"use client";
import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HomeHeroNewBlack = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const conref = useRef(null);

  useGSAP(() => {
    if (!imageRef.current || !conref.current) return;

    const tl = gsap.timeline();

    // First animation: Image fades and scales in
    tl.fromTo(
      imageRef.current,
      { y: -100, scale: 0.5, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          scrub: true, // Scrub for smooth transition
        },
      }
    );

    // Second animation: Image moves down and scales up
    gsap.fromTo(
      imageRef.current,
      { y: 0, scale: 1, opacity: 1 },
      {
        y: 100,
        scale: 1.2,
        opacity: 0.6,
        ease: "power2.out",
        duration: 2,
        scrollTrigger: {
          trigger: conref.current,
          start: "top top",
          end: "bottom 20%",
          scrub: true, // Smooth animation while scrolling
        },
      }
    );
  }, []);

  return (
    <div
      className="bg-black dark-section py-20 md:py-52 flex min-h-screen items-center justify-between relative overflow-hidden"
      ref={conref}
      // style={{
      //   backgroundImage: `repeating-linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 5%)`,
      //   backgroundSize: "20px 100%", // Adjust the spacing of vertical lines
      // }}
    >
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="container px-6 md:px-20 relative z-20">
        <div ref={textRef} className="relative text-left block max-w-[992px]">
          <div className="relative z-20">
            <h1 className="text-white font-bold text-[40px] md:text-[70px] 2xl:text-[100px] uppercase">
              We are <span className="ml-2 spanClass">creative</span>
            </h1>
            <div className="flex items-center uppercase">
              <Icon
                icon="mynaui:fat-arrow-up-right"
                className="mr-4 text-[40px] md:text-[70px] 2xl:text-[100px] text-white"
              />
              <h1 className="text-white font-bold text-[40px] md:text-[70px] 2xl:text-[100px] transition-colors duration-300">
                digital agency
              </h1>
            </div>
          </div>
          <div
            ref={imageRef}
            className="absolute -top-20 xl:-top-10  right-0 xl:-right-20 z-0"
          >
            <Image
              src="/assets/images/hometeam.png"
              width={400}
              height={400}
              alt="team"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroNewBlack;
