"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import Squares from "@/components/Squares/Squars";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const HomeMain = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("header");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 1200 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const icons = document.querySelectorAll(".rotating-icon");
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.03;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.03;

        gsap.to(icon, {
          x: offsetX,
          y: offsetY,
          duration: 0.7,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        "#homeMain",
        { opacity: 1, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 1 }
      )
      .fromTo(
        ".logo1",
        { opacity: 0, x: 20, y: 0, scale: 1 },
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: "expo.out" }
      )
      .fromTo(
        ".logo2",
        { opacity: 0, x: -20, y: 0, scale: 1 },
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: "expo.out" },
        "-=1"
      )
      .fromTo(
        ".rotating-icon",
        { opacity: 0, x: -20, y: 0, scale: 1 },
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2, ease: "expo.out" },
        "-=1"
      );

    // Scroll-Triggered Animations (optional)
    gsap.to("#homeMain", {
      scrollTrigger: {
        trigger: "#homeMain",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".logo1", {
      scrollTrigger: {
        trigger: "#homeMain",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 0.8,
      x: -300,
      y: -100,
    });

    gsap.to(".logo2", {
      scrollTrigger: {
        trigger: "#homeMain",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 0.8,
      x: 100,
      y: -50,
    });
  }, []);

  useEffect(() => {
    // Animation for scroll-down icon (up-down movement)
    gsap.to("#scroll-icon", {
      y: "-10px", // Moves up by 10px
      repeat: -1, // Repeats forever
      yoyo: true, // Make it go back down after going up
      duration: 0.8, // Duration for one complete animation cycle
      ease: "power2.inOut", // Smooth easing
    });
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-500 overflow-hidden ${
          isVisible ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        {/* <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        /> */}
        <div
          className="relative w-full h-screen bg-black bg-cover bg-center"
          id="homeMain"
        >
          <div className="flex justify-center items-center h-full">
            <div className="absolute text-center flex flex-col items-center justify-center px-4 sm:px-10">
              <p className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-wide logo1">
                Welcome To
              </p>
              <Image
                src="/assets/logo/logo-black.png"
                alt="zyeltrex"
                width={200}
                height={65}
                priority
                className="mt-10 invert flex justify-center items-center logo2"
              />
            </div>
            <div className=" hidden md:block absolute w-full h-full text-white overflow-hidden pointer-events-none">
              {/* Rotating Tech Icons */}
              <Icon
                icon="logos:react"
                className="rotating-icon opacity-80 absolute bottom-1/3 left-10 sm:left-20 md:left-30 lg:left-40"
                style={{ fontSize: "55px" }}
              />
              <Icon
                icon="nonicons:next-16"
                className="rotating-icon opacity-80 absolute bottom-10 left-60 sm:left-80 md:left-96 lg:left-[30%]"
                style={{ fontSize: "55px" }}
              />
              <Icon
                icon="flat-color-icons:google"
                className="rotating-icon opacity-80 absolute top-10 left-1/4 sm:left-1/5 md:left-1/4 lg:left-1/6"
                style={{ fontSize: "50px" }}
              />
              <Icon
                icon="logos:adobe"
                className="rotating-icon opacity-80 absolute top-20 right-1/3 sm:right-1/4 md:right-1/5 lg:right-1/6"
                style={{ fontSize: "40px" }}
              />
              <Icon
                icon="logos:html-5"
                className="rotating-icon opacity-80 absolute bottom-1/3 left-1/4 sm:left-1/3 md:left-1/4 lg:left-1/5"
                style={{ fontSize: "55px" }}
              />
              <Icon
                icon="logos:css-3"
                className="rotating-icon opacity-80 absolute bottom-20 right-1/4 sm:right-1/5 md:right-1/6 lg:right-1/8"
                style={{ fontSize: "50px" }}
              />
              <Icon
                icon="logos:javascript"
                className="rotating-icon opacity-80 absolute top-2/4 right-48 sm:right-40 md:right-32 lg:right-24"
                style={{ fontSize: "60px" }}
              />
              <Icon
                icon="logos:nodejs"
                className="rotating-icon opacity-80 absolute top-1/4 left-20 sm:left-28 md:left-36 lg:left-40"
                style={{ fontSize: "50px" }}
              />
              <Icon
                icon="logos:google-analytics"
                className="rotating-icon opacity-80 absolute top-1/4 right-20 sm:right-30 md:right-40 lg:right-48"
                style={{ fontSize: "50px" }}
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-6">
            <button
              id="scroll-icon"
              onClick={handleScrollDown}
              className="flex flex-col items-center justify-center text-white bg-transparent hover:bg-opacity-80 p-2"
            >
              <span className="text-white mt-2 text-sm sm:text-base">
                Scroll Down
              </span>
              <Icon
                icon="akar-icons:chevron-down"
                className="text-white"
                style={{ fontSize: "30px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
