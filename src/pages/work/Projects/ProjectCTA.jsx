"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CTABlock = ({ title, description }) => {
  useGSAP(() => {
    gsap.from(".cta-wrapper", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-wrapper",
        start: "top 80%",
      },
    });

    gsap.to(".cta-button", {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out",
      paused: true,
    });
  }, []);

  return (
    <section className="bg-[#0D1516] text-white py-16 px-6 rounded-xl my-10 mx-4 md:mx-20">
      <div className="max-w-3xl mx-auto text-center cta-wrapper">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-300 mb-8">{description}</p>
        <Link
          href="/contact"
          className="cta-button inline-block bg-primary text-black font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 hover:bg-yellow-400"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default CTABlock;
