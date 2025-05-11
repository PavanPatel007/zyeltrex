"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurPortfolio = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const titleRef = useRef(null);
  const tdescriptionRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentSlide = projects[swiper.activeIndex];
    setBgColor(currentSlide.bgColor || "#ffffff");

    const title = swiper.slides[swiper.activeIndex].querySelector(".stitle");

    const description =
      swiper.slides[swiper.activeIndex].querySelector(".description");
    gsap.fromTo(
      [description, title],
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  };

  // Animate the title from bottom to top
  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 60%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      tdescriptionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 60%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section className="container px-4 sm:px-8 md:px-16 lg:px-40 py-14">
      <div className="text-center mb-10">
        <h2
          ref={titleRef}
          className="text-black font-bold text-3xl sm:text-4xl md:text-5xl mb-3"
        >
          Our Portfolio
        </h2>
        <p
          ref={tdescriptionRef}
          className="text-dark-gray max-w-[500px] mx-auto text-sm sm:text-base"
        >
          Our design services start and end with a best-in-class experience
          strategy that builds brands.
        </p>
      </div>

      <div
        className="flex items-center justify-center transition-colors duration-500 rounded-xl"
        style={{ backgroundColor: bgColor }}
      >
        <div className="container px-4 sm:px-8 md:px-16 lg:px-32 py-10 relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            autoplay
            draggable
            loop
            navigation={{
              nextEl: ".custom-next-btn",
              prevEl: ".custom-prev-btn",
            }}
            onSlideChange={handleSlideChange}
          >
            {projects.map((slide) => (
              <SwiperSlide key={slide.id} className="cursor-grab">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  <div>
                    <Image
                      src={slide.logo}
                      height={50}
                      width={150}
                      alt={slide.title}
                      className="w-full h-auto max-w-[60px] lg:max-w-[150px]"
                    />
                    <h3 className="stitle text-xl sm:text-2xl md:text-3xl font-bold mb-4 lg:mb-8 mt-8">
                      {slide.title}
                    </h3>
                    <p className="description max-w-[300px] text-sm sm:text-base mb-8">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.siteLink || "#"}
                      className="flex items-center bg-black text-white px-4 py-2 mt-6 rounded-md hover:bg-primary hover:text-white transition-all hover:-translate-y-1 justify-center max-w-[120px]"
                    >
                      View Site
                    </Link>
                  </div>

                  <div>
                    <Image
                      src={slide.image}
                      height={550}
                      width={550}
                      alt={slide.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center mt-4 lg:mt-8">
            <button className="mr-2 custom-prev-btn flex items-center bg-white border text-black px-2 py-2 rounded-full hover:bg-primary transition-all">
              <Icon icon="mdi:chevron-left" className="text-2xl " />
            </button>
            <button className="custom-next-btn flex items-center bg-white border text-black px-2 py-2 rounded-full hover:bg-primary transition-all">
              <Icon icon="mdi:chevron-right" className="text-2xl " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
