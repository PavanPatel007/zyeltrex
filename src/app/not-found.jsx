"use client";
import Header from "@/components/Header/Header";
import HeaderFull from "@/components/Header/HeaderFull";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import Link from "next/link";

const NotFound = () => {
  useGSAP(() => {
    gsap.from(".about-text", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <>
      {/* <Header /> */}
      <HeaderFull />
      <div className="relative group overflow-hidden">
        {/* Wrapper for background and text */}
        <div className="md:h-[500px] lg:h-[600px] relative overflow-hidden m-5 md:ml-14 rounded-2xl">
          {/* Background Image */}
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/assets/bg/chess2.jpeg')" }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex justify-center items-center flex-col">
            <h2 className="text-white text-[60px] md:text-[130px] font-bold text-center about-text uppercase">
              404 Not found
            </h2>

            <Link
              href={"/"}
              className="text-right bg-black p-4 rounded-xl text-white  hover:-translate-y-1 font-medium flex items-center justify-end space-x-2 transition-all"
            >
              <Icon icon="ep:right" className="w-5 h-5 transform rotate-180" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
