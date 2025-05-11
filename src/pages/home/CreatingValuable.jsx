"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconBox from "@/components/IconBox/IconBox";
import React from "react";
import { Timeline } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const CreatingValuable = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      icon: "mdi:web",
      heading: "Web Development",
      content:
        "Build your online presence with our expert Web Development services. Our skilled team will create a stunning, responsive website tailored to your needs.",
    },
    {
      icon: "mdi:cellphone",
      heading: "App Development",
      content:
        "Bring your ideas to life with our cutting-edge App Development services. We craft high-performance mobile and web apps that deliver seamless user experiences.",
    },
    {
      icon: "mdi:robot",
      heading: "AI & ML Development",
      content:
        "Leverage the power of AI & Machine Learning to drive innovation. From intelligent automation to predictive analytics, we build smart solutions for your business.",
    },
    {
      icon: "mdi:account-tie",
      heading: "IT Consulting",
      content:
        "Optimize your IT strategy with our expert consulting services. We provide tailored solutions to enhance efficiency, security, and scalability for your business.",
    },
  ];

  const tl = new Timeline();

  useGSAP(() => {
    tl.from(titleRef.current, {
      x: -300,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".second-c",
        start: "top 70%",
        end: "top 50%",
        toggleActions: "play none none none",
        scrub: true,
      },
    });

    tl.from(descriptionRef.current, {
      x: -300,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".second-c",
        start: "top 70%",
        end: "top 50%",
        toggleActions: "play none none none",
        scrub: true,
      },
    });

    // Cards Animation
    cardRefs.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none none",
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 ">
      <div className="max-w-[1140px] mx-auto">
        <div className="mb-14 second-c">
          <h1
            ref={titleRef}
            className="text-[30px] sm:text-[40px] lg:text-[50px] max-w-4xl font-bold tracking-tight leading-tight mb-9 text-black"
          >
            Empowering Businesses with Innovative Digital Solutions.
          </h1>
          <p
            ref={descriptionRef}
            className="text-dark-gray max-w-4xl text-sm sm:text-base lg:text-lg"
          >
            At <span className="custom-underline">Zyeltrex</span>, we craft
            tailored digital experiences that elevate brands and drive success.
            From dynamic websites to smart applications, we turn your ideas into
            impactful realities.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              key={index}
              className="w-full rounded-3xl border border-gray-300 p-5"
            >
              <IconBox
                icon={card.icon}
                heading={card.heading}
                content={card.content}
                primaryColor={card.primaryColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatingValuable;
