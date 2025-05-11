"use client";
import { ROUTE } from "@/routes/routes";
import Link from "next/link";
import React, { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import { useRouter } from "next/navigation";

const RoundedLetsTalk = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container rounded-xl py-14">
      <div className="relative group overflow-hidden  rounded-xl">
        <div className="h-[300px] relative overflow-hidden  rounded-xl">
          <div
            className="h-full w-full rounded-xl bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/assets/bg/letstalk.png')" }}
          ></div>

          <div className="absolute inset-0 rounded-xl bg-black/50"></div>

          <div className=" container absolute inset-0 flex justify-center md:justify-between flex-col md:flex-row items-center px-8">
            <h2 className="text-white text-[60px] md:text-[100px] font-bold lets-talk">
              Let's Talk
            </h2>

            <button
              onClick={() => router.push(ROUTE.contact)}
              className="bg-black text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <ModalForm
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default RoundedLetsTalk;
