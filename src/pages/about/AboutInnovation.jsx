"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ icon, title, description }) => (
  <div className="pt-14 pr-9 pb-12 pl-14 border h-full border-[#04000033] text-black rounded-lg transition-transform hover:scale-105">
    <Icon icon={icon} className="mb-12 w-14 h-14 text-primary" />
    <h3 className="text-lg font-semibold mb-3 text-dark">{title}</h3>
    <p className="text-base text-[#494B5D]">{description}</p>
  </div>
);

const AboutInnovation = () => {
  const cardsContainerRef = useRef(null);
  const introSectionRef = useRef(null);

  useGSAP(() => {
    // Animate intro section
    gsap.fromTo(
      introSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate cards one by one
    const cards = cardsContainerRef.current.querySelectorAll(".card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const cardsData = [
    {
      icon: "fluent:search-visual-24-filled",
      title: "VISUAL DESIGN",
      description:
        "Our design team crafts visually stunning, user-centric experiences that captivate audiences. By blending modern aesthetics with functional interfaces, we build designs that are not only beautiful but also intuitive and engaging, ensuring your brand stands out online.",
    },
    {
      icon: "fluent:task-list-24-filled",
      title: "STRATEGY",
      description:
        "We help you craft a clear and effective digital strategy that drives growth. Through detailed analysis of your business, audience, and market trends, we create custom plans that optimize engagement, increase traffic, and maximize conversion rates for long-term success.",
    },
    {
      icon: "fluent:code-24-filled",
      title: "WEB DEVELOPMENT",
      description:
        "Our team of developers builds robust, fast, and responsive websites tailored to your business needs. From e-commerce platforms to custom web applications, we ensure your website is not only visually appealing but also technically sound, SEO-optimized, and user-friendly.",
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="container pt-14 pb-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center"
          ref={introSectionRef}
        >
          {/* Title */}
          <div className="lg:col-span-12">
            <h2 className="text-[36px] md:text-[63px] font-semibold leading-[1.25em]">
              Building Innovative Digital Products
            </h2>
          </div>
          {/* Description */}
          <div className="lg:col-span-12">
            <p className="text-base md:text-lg font-medium text-[#494B5D]">
              At Zyeltrex, we transform groundbreaking ideas into powerful
              digital experiences. We use cutting-edge technologies and a
              client-first approach to deliver products that inspire growth,
              optimize operations, and open new opportunities for businesses
              across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container pt-8 pb-14">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={cardsContainerRef}
        >
          {cardsData.map((card, index) => (
            <div key={index} className="card h-full">
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutInnovation;
