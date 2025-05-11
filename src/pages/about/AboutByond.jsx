"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const AboutBeyond = () => {
  const yearsRef = useRef(null);
  const sectionRef = useRef(null); // Reference for "About Us" section
  const imageRef = useRef(null); // Reference for the big image
  const [startCount, setStartCount] = useState(false); // State to control CountUp start

  useEffect(() => {
    gsap.fromTo(
      [sectionRef.current, ".content"],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Fade-in-up animation for the big image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Start animation when the image is 80% visible
          toggleActions: "play none none reverse",
        },
      }
    );

    // Trigger CountUp animation when element is visible
    ScrollTrigger.create({
      trigger: yearsRef.current,
      start: "top 80%", // Start when the top of the element hits 80% of the viewport
      onEnter: () => setStartCount(true), // Set state to true when visible
    });
  }, []);

  return (
    <>
      {/* Intro Section */}
      <section
        className="container text-white pt-14 pb-3"
        ref={sectionRef} // Reference for animation
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12 md:col-span-12">
            <p className="mb-3">
              <span className="bg-yellow-300 text-black rounded-full p-3 font-semibold">
                About Us
              </span>
            </p>
            <h2 className="text-[36px] md:text-[48px] lg:text-[63px] font-semibold leading-[1.25em]">
              zyeltrex's Core Beliefs: Empowering Success Through Excellence
            </h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container text-white pt-14 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 md:col-span-12">
            <p className="md:ml-16 text-[15px] md:text-base content">
              As a leading digital agency in Paris, we look to engage with our
              clients beyond the conventional design and development agency
              relationship, becoming a partner to the people and companies we
              work with.
            </p>
          </div>
          <div className="lg:col-span-6 md:col-span-12">
            <p className="md:ml-16 text-[15px] md:text-base content">
              We create brand identities, digital experiences, and print
              materials that communicate clearly achieve marketing goals, and
              look fantastic. Urban design draws together the many strands of
              place-making, environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Big Image Section */}
      <section className="container text-white pt-14 pb-3 hidden md:block">
        <div className="ml-16" ref={imageRef}>
          {" "}
          {/* Reference for animation */}
          <Image
            src="/assets/images/laptopMock.png"
            alt="Big Image"
            width={1000}
            height={1000}
            className="w-full object-cover relative -z-10"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="container text-white pt-14 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 md:col-span-12">
            <div className="md:-mt-[25%]">
              <Image
                src="/assets/images/laptopMock.png"
                alt="Small Image"
                width={1000}
                height={1000}
                className="w-full object-cover relative z-0"
              />
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-12">
            <div>
              <p className="ml-16 text-[15px] text-[#FFFFFFBF]">
                Our IT company brings together over 8 years of experience to
                deliver innovative technology solutions customized for the
                diverse needs of businesses and organizations. With one of the
                most extensive portfolios in the industry, we guarantee
                excellence in web development, mobile application solutions,
                digital marketing strategies and much more. We are committed
                to deliver innovative and sustainable technology services which
                empower our customers to meet their strategic objectives.
              </p>
              <div className="flex items-center ml-16">
                <h2
                  className="font-bold text-[120px] md:text-[150px]"
                  ref={yearsRef}
                >
                  {startCount && <CountUp start={0} end={8} duration={3} />}
                </h2>
                <p className="uppercase ml-[30px] text-[16px] md:text-[19px]">
                  Years of <br /> experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBeyond;
