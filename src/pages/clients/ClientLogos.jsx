"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { clientLogos } from "@/data/clientLogos";
import Image from "next/image";

const ClientLogos = () => {
  const logoRefs = useRef([]);

  useGSAP(() => {
    gsap.from(logoRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      delay: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <section className="pt-14">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-8">
          {" "}
          <span className="border-primary border-b-2"> Our Clients </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              ref={(el) => (logoRefs.current[index] = el)}
              className="flex justify-center items-center p-6  rounded-xl "
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                className="max-w-[150px] max-h-auto h-[70px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
