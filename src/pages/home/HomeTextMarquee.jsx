"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const HomeTextMarquee = () => {
  return (
    <section className="py-14">
      <Marquee
        gradient={true}
        speed={100}
        direction="right"
        gradientColor="white"
        pauseOnHover
      >
        {[
          "Web Design.",
          "Digital Marketing.",
          "UI/UX Strategy.",
          "Creative Solutions.",
        ].map((text, index) => (
          <h2
            key={index}
            className="text-[40px] sm:text-[80px] md:text-[100px] lg:text-[136px] text-black font-bold whitespace-nowrap mx-8"
          >
            {text}
          </h2>
        ))}
      </Marquee>
    </section>
  );
};

export default HomeTextMarquee;
