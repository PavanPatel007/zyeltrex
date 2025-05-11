"use client";

import React, { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { gsap } from "gsap";

const ServiceLink = ({
  href = "#",
  label = "",
  description = "",
  icon = "",
}) => {
  const cardRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const arrow = arrowRef.current;

    gsap.set(arrow, { x: 0 });

    if (card) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        gsap.to(arrow, { x: 10, duration: 0.3, ease: "power1.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
        gsap.to(arrow, { x: 0, duration: 0.3, ease: "power1.out" });
      });
    }
  }, []);

  return (
    <Link href={href}>
      <div
        ref={cardRef}
        className="group flex flex-col h-full bg-gray-100 rounded-xl p-4 text-[20px] font-bold hover:bg-primary transition-all cursor-pointer"
      >
        {/* Icon above */}
        <Icon
          icon={icon}
          className="text-[40px] text-primary mb-2 transition-colors duration-300 group-hover:text-white"
        />
        {/* Content in one line */}
        <div className="flex items-center justify-between w-full">
          <div className="flex-1">
            <span className="block group-hover:text-white">{label}</span>
            <p className="text-sm text-gray-600 font-normal group-hover:text-white">
              {description}
            </p>
          </div>
          <Icon
            icon="ep:right"
            ref={arrowRef}
            className="text-[25px] text-primary transition-colors duration-300 group-hover:text-white"
          />
        </div>
      </div>
    </Link>
  );
};

export default ServiceLink;
