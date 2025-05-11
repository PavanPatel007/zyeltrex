"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedHeader = () => {
  return (
    <section className="bg-black min-h-screen">
      <div className="container mx-auto py-24 flex items-center h-full min-h-screen justify-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 contact-left">
            <p className="font-semibold uppercase text-base md:text-base">
              Technology
            </p>
            <h2 className="text-[48px] md:text-[58px] font-bold leading-[1em] contact-header">
              <TypeAnimation
                sequence={[
                  "Revolutionizing Your Business with Innovative Technology Solutions", // First text
                  2000, // Wait 2 seconds
                  "Revolutionizing Your Business with Innovative Technology Solutions", // Second text
                  2000, // Wait 2 seconds
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity} // Loop the animation
                className="block"
              />
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-4 contact-right">
            <p className="text-lg font-medium md:text-xl">
              At zyeltrex, we offer technology expertise that combines
              cutting-edge with proven, to help you move up your business, with
              technology services that will improve productivity, increase
              efficiency and drive sustainable growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeader;
