"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ROUTE } from "@/routes/routes";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxSection = ({ title, content, imageSrc, reverse }) => {
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(imageRef.current, {
      y: -100,
      duration: 1,
    });
  });
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 lg:px-0 overflow-hidden`}
    >
      {/* Image Section */}
      {!reverse && (
        <div ref={imageRef} className="flex justify-center overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={674}
            height={452}
            className="max-h-[452px] w-full object-cover"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col justify-start space-y-8 px-4 md:px-20">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>
        <p className="text-gray-700 leading-relaxed">{content}</p>
        <Link
          href={ROUTE.contact}
          className="flex items-center justify-center text-center bg-black text-white px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all max-w-[150px]"
        >
          Get in Touch
        </Link>
      </div>

      {/* Reverse Image Section */}
      {reverse && (
        <div ref={imageRef} className="flex justify-center overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={674}
            height={452}
            className="max-h-[452px] w-full object-cover"
          />
        </div>
      )}
    </section>
  );
};

const WebAnalysis = () => {
  const sections = [
    {
      title: "Analysis",
      content:
        "Businesses must reconsider their online tactics as technology trends evolve. These days, failing to have an online strategy is not an option. Businesses that are forward-thinking must adapt to evolving technologies and create websites that are more current and relevant to today's clients. Our developers collaborate with you to customize your website using the most up-to-date technologies in order to meet your business objectives.",
      imageSrc: "/assets/images/analysis.png",

      reverse: false,
    },
    {
      title: "Design",
      content:
        "Zyeltrex  provides top-notch web design and development solutions to its clients, regardless of their domains, that fulfill their business requirements. To assure world-class web design and development, we use the most agile process to deploy various platforms. With our team of dedicated developers, we can provide an end-to-end solution for intriguing web design and development.",
      imageSrc: "/assets/images/design.jpg",
      reverse: true,
    },
    {
      title: "Testing",
      content:
        "We believe that your applications must add value to the lives of your users. This necessitates the creation of a bug-free, fully functional product, which can only be achieved through thorough quality assurance of web and mobile (QA). We provide full mobile and web app QA services on a variety of devices and in a variety of settings. We test your mobile and web app thoroughly, including human testing, visual QA, and automated testing, to guarantee that it runs smoothly and engages and retains users.",
      imageSrc: "/assets/images/testing.jpg",
      reverse: false,
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <ParallaxSection
          key={index}
          title={section.title}
          content={section.content}
          imageSrc={section.imageSrc}
          reverse={section.reverse}
        />
      ))}
    </>
  );
};

export default WebAnalysis;
