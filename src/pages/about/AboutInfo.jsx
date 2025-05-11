"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const AboutInfo = () => {
  const sectionsRef = useRef([]);

  useGSAP(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  return (
    <>
      {/* First Section: Company Overview */}
      <section className="container py-20 mt-20 px-6 lg:px-12 bg-gray-100  rounded-2xl  mb-16">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
              Our Journey
            </h2>
            <p className="text-lg text-dark opacity-85">
              Founded in 2024, Zyeltrex Technologies quickly rose to become a
              name synonymous with innovation in the tech industry. Born out of
              a passion for empowering businesses with cutting-edge solutions,
              we’ve successfully partnered with global companies to drive
              digital transformation.
            </p>
            <p className="text-lg text-dark opacity-85">
              From humble beginnings to a globally recognized IT firm based in
              Ahmedabad, Gujarat, our mission is clear: to provide the most
              innovative and future-ready solutions for businesses in every
              industry.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/creative-people-working-office.png"
              alt="Zyeltrex Technologies"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Second Section: Our Mission */}
      <section className="container py-20 px-6 lg:px-12 bg-white rounded-2xl  mb-16">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-dark opacity-85">
              At Zyeltrex, we believe in the transformative power of technology.
              Our mission is to empower businesses with advanced, scalable
              solutions that enhance performance and drive long-term success.
            </p>
            <p className="text-lg text-dark opacity-85">
              We are not just about technology; we’re about building lasting
              partnerships that help our clients succeed in the rapidly evolving
              digital landscape. Together, we can create the future.
            </p>
          </div>

          {/* Visual Element: Flex Layout of Icon Cards */}
          <div className="space-y-12">
            {/* Card 1 */}
            <div className="flex items-center space-x-6 p-6 bg-gray-100 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gray-200">
              <div className="text-6xl text-primary">
                <Icon icon="mdi:account-cog" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-dark">
                  Innovative Solutions
                </h3>
                <p className="text-md text-gray-600">
                  Harness cutting-edge technologies to craft innovative and
                  customized solutions for businesses.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center space-x-6 p-6 bg-gray-100 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gray-200">
              <div className="text-6xl text-accent">
                <Icon icon="mdi:handshake" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-dark">
                  Collaboration
                </h3>
                <p className="text-md text-gray-600">
                  Building strong partnerships with our clients and working
                  together to achieve long-term success.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center space-x-6 p-6 bg-gray-100 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gray-200">
              <div className="text-6xl text-primary">
                <Icon icon="mdi:rocket" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-dark">Growth</h3>
                <p className="text-md text-gray-600">
                  Accelerating business growth through technology solutions that
                  optimize operations and drive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
