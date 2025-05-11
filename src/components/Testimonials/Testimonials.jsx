"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { Icon } from "@iconify/react";
import { testimonialsData } from "@/data/testimonals";
import "swiper/css";
import TextWithLinePen from "../TextwithLinePen/TextWithLinePen";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="py-10 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
        {/* Left Section (Text) */}
        <div className="mr-4 md:mr-10">
          <p className="mb-6 text-sm uppercase font-bold ">— Testimonials</p>
          <h3 className="text-2xl sm:text-3xl font-bold leading-tight  mb-4">
            We collaborate with innovative businesses around the world. Our team
            designs custom marketing strategies to precisely target audiences
            and drive real growth.
          </h3>
        </div>

        {/* Right Section (Testimonials Slider) */}
        <div className="relative">
          <Swiper
            modules={[Navigation, EffectFade]}
            slidesPerView={1}
            autoplay
            draggable
            loop
            navigation={{
              nextEl: ".testimonials-next-btn",
              prevEl: ".testimonials-prev-btn",
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl  transition-shadow duration-300">
                  {/* Client Info (Image hidden for now) */}
                  <div className="flex items-center mb-4">
                    {/* <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    /> */}
                    <div>
                      <p className="text-lg font-semibold text-black">
                        {testimonial.name}
                      </p>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded mt-1 inline-block">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {testimonial.text} <br />
                    <span className="">
                      <TextWithLinePen text={testimonial?.thanksText} />
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="flex items-center mt-6 space-x-6">
            <button className="testimonials-prev-btn flex items-center justify-center w-10 h-10 bg-white text-black border border-gray-300 rounded-full hover:bg-primary hover:text-white transition">
              <Icon icon="lucide:move-left" className="text-xl" />
            </button>

            <span className="text-gray-500 font-medium text-sm">
              {currentSlide + 1} / {testimonialsData.length}
            </span>

            <button className="testimonials-next-btn flex items-center justify-center w-10 h-10 bg-white text-black border border-gray-300 rounded-full hover:bg-primary hover:text-white transition">
              <Icon icon="lucide:move-right" className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
