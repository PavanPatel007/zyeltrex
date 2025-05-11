// components/LetsTalk.tsx
"use client";
import { gsap } from "gsap";
import React, { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";

const LetsTalk = () => {
  // To manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // GSAP animation
  React.useEffect(() => {
    gsap.from(".lets-talk", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="relative group overflow-hidden">
      <div className="h-[300px] relative overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('/assets/bg/letstalk.png')" }}
        ></div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container absolute inset-0 flex justify-between items-center px-8">
          <h2 className="text-white text-[60px] md:text-[130px] font-bold lets-talk">
            Let's Talk
          </h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* ModalForm Component */}
      <ModalForm
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)} // Pass the close function
      />
    </div>
  );
};

export default LetsTalk;
