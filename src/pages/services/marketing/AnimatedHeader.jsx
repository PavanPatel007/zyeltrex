"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedHeaderMarketing = () => {
  return (
    <section className="bg-black min-h-screen">
      <div className="container mx-auto py-24 flex items-center h-full min-h-screen justify-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 contact-left">
            <p className="font-semibold uppercase text-base md:text-base">
              Marketing
            </p>
            <h2 className="text-[48px] lg:text-[58px  ]  font-bold leading-[1em] contact-header">
              <TypeAnimation
                sequence={[
                  "We design perceptions for the brands.",
                  2000,
                  "Designing brand perceptions with neuromarketing and behavioral science to enhance customer experiences.",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="block"
              />
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-4 contact-right">
            <p className="text-lg font-medium md:text-xl">
              Urban design draws together the many strands of place-making,
              environmental stewardship, social equity, and economic viability
              into the creation of vibrant communities and sustainable living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeaderMarketing;
