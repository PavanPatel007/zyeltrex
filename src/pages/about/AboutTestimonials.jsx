"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { Icon } from "@iconify/react";
import { testimonialsData } from "@/data/testimonals";
import "swiper/css";
import TextWithLinePen from "@/components/TextwithLinePen/TextWithLinePen";
// import TextWithLinePen from "../TextwithLinePen/TextWithLinePen";

const AboutTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <section className="container py-14">
        <div className="max-w-xl mx-auto">
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
              // effect="fade"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="flex items-center mb-6 justify-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={76}
                        height={76}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="text-white font-medium text-base mb-2">
                          {testimonial.name}
                        </p>
                        <span className="rounded-lg bg-[#eeeeee] px-2 py-1 text-[#1d293f] text-xs font-normal">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-sm leading-relaxed text-center px-4">
                      {testimonial.text} Thank You -{" "}
                      <TextWithLinePen
                        text="Zyeltrex  Web Solution"
                        imgClass="invert"
                      />
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex items-center mt-6 justify-center">
              <div className="flex items-center space-x-4">
                <button className="testimonials-prev-btn flex items-center  text-white px-2 py-2 rounded-full hover:bg-primary transition-all">
                  <Icon icon="lucide:move-left" className="text-2xl" />
                </button>

                <span className="text-white">
                  {currentSlide + 1} / {testimonialsData.length}
                </span>

                <button className="testimonials-next-btn flex items-center  text-white px-2 py-2 rounded-full hover:bg-primary transition-all">
                  <Icon icon="lucide:move-right" className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonials;
