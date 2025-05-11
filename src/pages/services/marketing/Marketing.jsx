"use client";
import ServiceLink from "@/components/ServiceLink/ServiceLink";
import { marketingServices } from "@/data/webServices";
import { ROUTE } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";
import AnimatedHeaderMarketing from "./AnimatedHeader";
import HowCanWeMarketing from "./HowCanWeMarketing";
import ToolsWeUseMarketing from "./ToolsWeUseMarketing";

const Marketing = () => {
  return (
    <div>
      <AnimatedHeaderMarketing />
      <div>
        <Image
          src="/assets/images/designMockup.jpg"
          alt="image"
          width={1920}
          height={1024}
          className="w-full object-contain"
        />
      </div>
      <section className="container py-14">
        <div className="text-center md:text-left px-4">
          <p className="text-primary font-bold text-lg md:text-xl lg:text-2xl">
            What do we serve ?
          </p>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight">
            End-to-end neuromarketing services and branding strategies of the
            digital world.
          </h2>
        </div>
      </section>
      <section className="container py-14 pt-7">
        <div>
          <h2 className="text-primary font-bold text-[25px] mb-8">Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => (
              <ServiceLink
                key={index}
                href={service.href}
                label={service.label}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <HowCanWeMarketing />
      <ToolsWeUseMarketing />
      <div className="container rounded-xl py-14">
        <div className="relative group overflow-hidden  rounded-xl">
          <div className="h-[300px] relative overflow-hidden  rounded-xl">
            <div
              className="h-full w-full rounded-xl bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/assets/bg/letstalk.png')" }}
            ></div>

            <div className="absolute inset-0 rounded-xl bg-black/50"></div>

            <div className=" container absolute inset-0 flex justify-between items-center px-8">
              <h2 className="text-white text-[60px] md:text-[100px] font-bold lets-talk">
                Let's Talk
              </h2>

              <Link
                href={ROUTE.contact}
                className="bg-black text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
