"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const HomeClientLogos = () => {
  const clientLogos = [
    "/assets/portfolio/blacklogo/beaLogo.png",
    "/assets/portfolio/blacklogo/cinestar.png",
    "/assets/portfolio/blacklogo/connplex.png",
    "/assets/portfolio/blacklogo/integrezLogo.png",
    "/assets/portfolio/blacklogo/leakLogo.png",
    "/assets/portfolio/kd.svg",
  ];

  return (
    <div className="border-b border-[#F0F0F0] py-14">
      <div className="container">
        <div className="max-w-[1000px] mx-auto rounded-xl border border-[#e1dedc] bg-white py-8 px-4 lg:py-[36px] lg:px-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2} // Default for small screens
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 }, // Tablets
              768: { slidesPerView: 4 }, // Medium screens
              1024: { slidesPerView: 5 }, // Larger screens
            }}
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <Image
                    src={logo}
                    alt={`Client logo ${index}`}
                    width={110}
                    height={40}
                    className="max-w-[110px] max-h-[40px] w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeClientLogos;
