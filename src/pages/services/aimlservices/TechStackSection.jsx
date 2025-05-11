"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const techIcons = [
  { name: "TensorFlow", icon: "logos:tensorflow" },
  { name: "PyTorch", icon: "logos:pytorch-icon" },
  { name: "Scikit-learn", icon: "devicon:scikitlearn" },
  { name: "Keras", icon: "devicon:keras" },
  { name: "OpenCV", icon: "logos:opencv" },
  { name: "Pandas", icon: "logos:pandas-icon" },
  { name: "NumPy", icon: "logos:numpy" },
  { name: "Python", icon: "logos:python" },
];

const TechStackSection = () => {
  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our AI/ML App Development Tech-Stack
          </h2>
          <h4 className="text-lg md:text-xl text-primary font-semibold mb-4">
            Stellar solutions that are powered by top-notch artificial
            intelligence tools and technologies for better scalability.
          </h4>
          <p className="text-gray-700 text-base md:text-lg">
            Our resource investment and technological adoption have synergized
            to accomplish one common goal — to provide efficiency in enterprise
            solutions by eliminating complexity and enhancing security to
            eradicate human error possibilities.
          </p>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            As an expert artificial intelligence and machine learning
            development company, we integrate solution technologies that help
            clients to make better decisions, innovate confidently, and save on
            operational cost. We synergize cutting edge technologies to create
            the best solutions for you.
          </p>
        </div>

        {/* Right Tech Icon Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-3 gap-4">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <Icon icon={tech.icon} width={40} height={40} />
              <span className="mt-2 text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
