"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ausSite, siteInfo } from "@/config/siteConfig";
import { useGSAP } from "@gsap/react";

const ContactHero = () => {
  const [activeTab, setActiveTab] = useState("Australia");

  useGSAP(() => {
    // GSAP animation for initial page load
    gsap.from(".contact-left", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(".contact-right", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(".contact-header", {
      opacity: 0,
      y: -100,
      duration: 1.5,
      delay: 0.3,
      ease: "power2.out",
    });
  });

  const animateTabContent = () => {
    gsap.from(".tab-content", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="container mx-auto pt-12 -mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 contact-left">
            <p className="font-semibold uppercase text-base md:text-xl text-black">
              Contact us
            </p>
            <h2 className="text-[48px] md:text-[80px] lg:text-[92px] font-bold leading-[1em] text-black contact-header">
              Find our <br /> office
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-4 contact-right">
            <p className="text-lg text-dark-gray font-medium md:text-xl">
              Urban design draws together the many strands of place-making,
              environmental stewardship, social equity, and economic viability
              into the creation of vibrant communities and sustainable living.
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Background Image Section */}
      <section
        className="h-[300px] md:h-[700px] bg-cover bg-center parallax-bg"
        style={{ backgroundImage: "url('/assets/bg/contact2.jpeg')" }}
      ></section>

      {/* Tabs Section */}
      <section className=" lg:-mt-[285px]">
        <div className="">
          {/* Grid Layout */}
          <div className="grid grid-cols-6">
            <div className="col-span-6 md:col-span-3 bg-white pl-6 md:pl-[90px] pr-6 md:pr-[30px] pt-[40px] md:pt-[80px] pb-[50px]">
              {/* Tabs */}
              <div className="flex justify-start space-x-6 md:space-x-8 mb-8">
                <button
                  className={`text-[24px] md:text-[36px] font-semibold px-4 md:px-6 py-2 border-b-2 transition uppercase ${
                    activeTab === "Australia"
                      ? "border-primary text-black"
                      : "border-transparent text-dark-gray hover:text-primary"
                  }`}
                  onClick={() => {
                    setActiveTab("Australia");
                    animateTabContent();
                  }}
                >
                  Australia
                </button>
                <button
                  className={`text-[24px] md:text-[36px] font-semibold px-4 md:px-6 py-2 border-b-2 transition uppercase ${
                    activeTab === "India"
                      ? "border-primary text-black"
                      : "border-transparent text-dark-gray hover:text-primary"
                  }`}
                  onClick={() => {
                    setActiveTab("India");
                    animateTabContent();
                  }}
                >
                  India
                </button>
              </div>

              {/* Tab Content */}
              <div className="text-left tab-content">
                {activeTab === "Australia" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-6">
                      <h6 className="text-[13px] font-bold text-black mb-4 uppercase">
                        Call us
                      </h6>
                      <p className="text-base text-black uppercase mb-6">
                        HOW CAN I HELP YOU?
                      </p>
                      <h4 className="text-black font-bold text-base">
                        {siteInfo.phone}
                      </h4>
                    </div>
                    <div className="col-span-6">
                      <h6 className="text-[13px] font-bold text-black mb-4 uppercase">
                        Get in touch
                      </h6>
                      <p className="text-base text-black uppercase mb-6">
                        Have a project in mind? Send a message.
                      </p>
                      <h4 className="text-black font-bold text-base">
                        {siteInfo.email.info}
                      </h4>
                    </div>
                  </div>
                )}
                {activeTab === "India" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-6">
                      <h6 className="text-[13px] font-bold text-black mb-4 uppercase">
                        Call us
                      </h6>
                      <p className="text-base text-black uppercase mb-6">
                        HOW CAN I HELP YOU?
                      </p>
                      <h4 className="text-black font-bold text-base">
                        {siteInfo.phone}
                      </h4>
                    </div>
                    <div className="col-span-6">
                      <h6 className="text-[13px] font-bold text-black mb-4 uppercase">
                        Get in touch
                      </h6>
                      <p className="text-base text-black uppercase mb-6">
                        Have a project in mind? Send a message.
                      </p>
                      <h4 className="text-black font-bold text-base">
                        {siteInfo.email.info}
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Second Column (Empty) */}
            <div className="col-span-6 md:col-span-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
