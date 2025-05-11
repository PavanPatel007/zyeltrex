"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
// import "swiper/css/effect-creative";
// import "swiper/css/effect-cards";
import {
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectFade,
  Navigation,
  EffectCube,
} from "swiper/modules";
import gsap from "gsap";
import { Icon } from "@iconify/react"; // Make sure you have iconify installed

const HomeHero = () => {
  const textRefs = useRef([]); // Array to hold refs for all text content
  const titleRefs = useRef([]); // Array to hold refs for each letter in the title
  const swiperRef = useRef(null); // Ref to the Swiper instance

  const services = [
    {
      id: 1,
      name: "Development",
      imageUrl: "/assets/images/home2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab suscipit corrupti inventore mollitia dolorum voluptas nobis! Illum, molestiae commodi?",
    },
    {
      id: 2,
      name: "Design",
      imageUrl: "/assets/images/home1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab suscipit corrupti inventore mollitia dolorum voluptas nobis! Illum, molestiae commodi?",
    },

    {
      id: 3,
      name: "Marketing",
      imageUrl: "/assets/images/home3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab suscipit corrupti inventore mollitia dolorum voluptas nobis! Illum, molestiae commodi?",
    },
    {
      id: 4,
      name: "Hosting",
      imageUrl: "/assets/images/home4.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab suscipit corrupti inventore mollitia dolorum voluptas nobis! Illum, molestiae commodi?",
    },
  ];

  // GSAP animation for title text (letters) to come one by one
  const handleTitleAnimation = (index) => {
    const title = titleRefs.current[index];
    if (title) {
      const letters = title.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  };

  // GSAP animation for text content on slide change
  const handleSlideChange = async (index) => {
    const title = titleRefs.current[index];
    if (title) {
      const letters = title.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  };

  useEffect(() => {
    handleSlideChange(0);
  }, []);

  // Control slide change programmatically using Swiper instance
  // const handlePrevSlide = () => {
  //   swiperRef.current.swiper.slidePrev();
  // };

  // const handleNextSlide = () => {
  //   swiperRef.current.swiper.slideNext();
  // };

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[85vh]">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          effect="cube"
          modules={[Autoplay, EffectCube, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // creative
          // creativeEffect={{
          //   prev: {
          //     shadow: true,
          //     translate: [0, 0, -400],
          //   },
          //   next: {
          //     translate: ["100%", 0, 0],
          //   },
          // }}
          // cube
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.1,
          }}
          navigation={{
            nextEl: ".home-custom-next-btn",
            prevEl: ".home-custom-prev-btn",
          }}
          draggable={false}
          onSlideChange={({ activeIndex }) => {
            const realIndex = activeIndex % services.length;
            handleSlideChange(realIndex);
          }}
          className="mySwiper homeSlider"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div
                className="w-full h-[75vh] md:h-[85vh] bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${service.imageUrl})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Text Content */}
                <div
                  ref={(el) => (textRefs.current[index] = el)} // Store ref for each slide's text
                  className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 flex justify-center items-center flex-col text-center"
                >
                  {/* Title with individual letters */}
                  <h2
                    ref={(el) => (titleRefs.current[index] = el)} // Store ref for each title's letters
                    className="text-white justify-center items-center font-semibold text-[32px] md:text-[50px] lg:text-[150px] flex flex-wrap text-center"
                  >
                    {service.name.split("").map((letter, letterIndex) => (
                      <span key={letterIndex} className="letter">
                        {letter}
                      </span>
                    ))}
                  </h2>
                  <p className="text-white hidden font-medium text-base md:text-lg lg:text-xl max-w-[90%] md:max-w-[700px] mt-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Buttons for slide control */}
        <div className="flex items-center mt-4 lg:mt-8 absolute bottom-8 right-8 z-10">
          <button className="mr-2 home-custom-prev-btn flex items-center bg-white border text-black px-2 py-2 rounded-full hover:bg-primary transition-all">
            <Icon icon="mdi:chevron-left" className="text-2xl " />
          </button>
          <button className="home-custom-next-btn flex items-center bg-white border text-black px-2 py-2 rounded-full hover:bg-primary transition-all">
            <Icon icon="mdi:chevron-right" className="text-2xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
