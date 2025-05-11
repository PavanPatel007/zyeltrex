import QueTitle from "@/components/QueTitle/QueTitle";
import RoundedLetsTalk from "@/components/RoundedLetsTalk/RoundedLetsTalk";
import TechList from "@/components/TechList/TechList";
import { mobileServices, webServices } from "@/data/webServices";
import Image from "next/image";
import AnimatedHeader from "./AnimatedHeader";
import HowCanWeDoIt from "./HowCanWeDoIt";
import ToolsWeUse from "./ToolsWeUse";

const Technology = () => {
  return (
    <>
      <AnimatedHeader />
      <div>
        <Image
          src="/assets/images/designMockup.jpg"
          alt="image"
          width={1920}
          height={1024}
          className="w-full object-contain"
        />
      </div>
      <QueTitle
        title=" What do we serve?"
        description="Our Technology Services portfolio has you covered with all the essentials tailored to fit your business requirements. Our offerings include:"
      />

      <TechList services={webServices} title={`Web.`} />

      <TechList services={mobileServices} title={`Mobile Apps.`} />

      <HowCanWeDoIt />
      <ToolsWeUse />

      {/* <div className="container rounded-xl py-14">
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
      </div> */}
      <RoundedLetsTalk />
    </>
  );
};

export default Technology;
