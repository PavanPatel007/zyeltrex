"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import TextWithLinePen from "@/components/TextwithLinePen/TextWithLinePen";
import CountUp from "react-countup";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/routes/routes";

const ImageContentScroll = () => {
  const router = useRouter();
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const cursorRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    const image = imageRef.current;
    const content = contentRef.current;
    const cursor = cursorRef.current;

    if (!image || !content) return; // Ensure refs are not null

    if (window.innerWidth > 768) {
      // 3D Tilt Effect
      const handleMouseMove = (e) => {
        if (!image) return;
        const { width, height, left, top } = image.getBoundingClientRect();
        const xVal = ((e.clientX - left) / width - 0.5) * 40;
        const yVal = ((e.clientY - top) / height - 0.5) * 40;

        gsap.to(image, {
          rotationY: xVal,
          rotationX: -yVal,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        if (!image) return;
        gsap.to(image, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      image.addEventListener("mousemove", handleMouseMove);
      image.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        image.removeEventListener("mousemove", handleMouseMove);
        image.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  });

  // Custom Cursor Effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => gsap.to(cursor, { scale: 2, opacity: 1 });
    const handleMouseLeave = () => gsap.to(cursor, { scale: 0, opacity: 0 });

    window.addEventListener("mousemove", moveCursor);
    imageRef.current?.addEventListener("mouseenter", handleMouseEnter);
    imageRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      imageRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      imageRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 md:px-8">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none flex items-center justify-center w-24 h-24 bg-black text-white text-sm font-bold rounded-full opacity-0 scale-0 z-50 transition-all"
      >
        Explore
      </div>

      {/* Image Section */}
      <div ref={imageRef} className="flex justify-center relative">
        <Image
          src="/assets/images/about-home.jpg"
          alt="Zyeltrex  Web"
          width={674}
          height={452}
          className="max-h-[452px] max-w-[674px] w-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div
        ref={contentRef}
        className="flex flex-col justify-start space-y-8 px-4 md:px-0 lg:mx-20 2xl:mx-28"
      >
        <p className="text-black uppercase text-base font-bold">
          — About <TextWithLinePen text="Zyeltrex " />
        </p>

        <h1 className="font-bold text-[28px] sm:text-[36px] lg:text-[50px] leading-tight">
          We Create <br />
          <span className="bg-[#095EC11C] p-0.5">Digital Excellence</span>!
        </h1>

        <p className="text-dark-gray leading-relaxed">
          <span className="custom-underline">Zyeltrex</span> transforms your
          vision into impactful digital experiences. From bespoke websites to
          advanced mobile apps, we deliver solutions that drive real growth.
        </p>

        <div className=" hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[28px] sm:text-[36px] lg:text-[50px] font-bold text-black">
              <CountUp start={0} end={4.9} decimals={1} startOnMount />
            </h3>
            <p className="text-dark-gray">Average Client Rating</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Icon
                  key={index}
                  icon="material-symbols:star-rounded"
                  className="text-xl text-black"
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[28px] sm:text-[36px] lg:text-[50px] font-bold text-black">
              <CountUp start={0} end={500} delay={1} startOnMount suffix="+" />
            </h3>
            <p className="text-dark-gray">Successful Projects Delivered</p>
          </div>
        </div>

        <button
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all max-w-[170px]"
          onClick={() => router.push(ROUTE.contact)}
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default ImageContentScroll;
