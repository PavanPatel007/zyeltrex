"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { gsap } from "gsap";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";

const HomeHeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  const slidesRef = useRef([]);
  const techTextRef = useRef([]);
  const progressBarRef = useRef([]);

  const images = [
    "/assets/slider/header-slide-1.webp",
    "/assets/slider/header-slide-2.webp",
    "/assets/slider/header-slide-3.webp",
    "/assets/slider/header-slide-4.webp",
  ];

  const services = [
    { icon: "mdi:web", title: "Website\n Development" },
    { icon: "mdi:palette", title: "Graphic\nDesign" },
    { icon: "mdi:account-group", title: "Social Media\n Marketing" },
    { icon: "mdi:server", title: "Hosting and\n Domain" },
  ];

  const startProgressAnimation = (index) => {
    // Stop all progress bars
    gsap.killTweensOf(progressBarRef.current);
    progressBarRef.current.forEach((bar) =>
      gsap.to(bar, { width: "0%", duration: 0 })
    );

    // Start animation for the new active slide
    gsap.to(progressBarRef.current[index], {
      width: "100%",
      duration: 5, // Match autoplay duration
      ease: "linear",
    });
  };

  const handleServiceClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const tl = gsap.timeline({ defaults: { duration: 0.5 } });
  useGSAP(() => {
    if (techTextRef.current) {
      techTextRef?.current?.forEach((card, index) => {
        tl.from(card, {
          y: 100,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: ".home-section",
            markers: true,
            start: "top 50%",
            end: "top 80%",
            scrub: true,
          },
        });
      });
    }
  });

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    swiper.on("slideChangeTransitionStart", () => {
      const prevSlide = slidesRef.current[swiper.previousIndex];
      const nextSlide = slidesRef.current[swiper.activeIndex];

      if (prevSlide) {
        gsap.to(prevSlide, {
          x: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      if (nextSlide) {
        gsap.fromTo(
          nextSlide,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }

      setActiveSlide(swiper.activeIndex);
      startProgressAnimation(swiper.activeIndex);
    });

    // Start progress for the first slide on load
    startProgressAnimation(0);
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="container h-full home-section">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-5">
            <h1 className="text-[75px] font-semibold text-black pt-[120px] leading-tight">
              Succeed Without <span> (L) </span>imitations
            </h1>
          </div>
          <div className="col-span-7 pt-10">
            <div className="flex justify-end">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      ref={(el) => (slidesRef.current[index] = el)}
                      className="transition-all flex justify-end"
                    >
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        height={500}
                        width={500}
                        className="max-h-[450px] object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Service Buttons with Progress Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {services.map((service, index) => (
            <div
              ref={(el) => (techTextRef.current[index] = el)}
              key={index}
              className={`w-full cursor-pointer p-4 transition-all duration-300 ${
                activeSlide === index ? "text-black" : "text-gray-400"
              }`}
              onClick={() => handleServiceClick(index)}
            >
              <div className="flex items-center">
                <div className="text-4xl">
                  <Icon icon={service.icon} />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold">
                    {service.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>

                  <div className="w-full h-1 bg-gray-300 mt-2 relative">
                    <div
                      ref={(el) => (progressBarRef.current[index] = el)}
                      className="absolute left-0 top-0 h-full bg-black"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSlider;
