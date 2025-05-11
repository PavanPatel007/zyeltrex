import React from "react";
import { Icon } from "@iconify/react";
import IconBox from "@/components/IconBox/IconBox";

const AIMLServicesCards = () => {
  const services = [
    {
      title: "AI Development Services",
      description:
        "Our AI development services provide businesses with intelligent solutions to automate processes, optimize decision-making, and enhance customer experience using machine learning algorithms and data science.",
      icon: "mdi:brain", // Icon for AI Development
    },
    {
      title: "Computer Vision",
      description:
        "We leverage advanced computer vision technology to enable machines to interpret and understand the visual world, allowing for real-time object detection, image recognition, and more.",
      icon: "mdi:camera", // Icon for Computer Vision
    },
    {
      title: "RPA",
      description:
        "Our intelligent automation solutions streamline complex business processes by integrating AI to reduce manual intervention, enhance productivity, and increase efficiency.",
      icon: "mdi:autorenew", // Icon for Automations
    },
    {
      title: "AI Chatbot Development",
      description:
        "We build intelligent AI-driven chatbots that interact with customers, provide real-time support, and help businesses automate communication to improve engagement and user experience.",
      icon: "mdi:robot", // Icon for AI Chatbot Development
    },
    {
      title: "Machine Learning Solutions",
      description:
        "We offer end-to-end machine learning solutions that help businesses analyze data, create predictive models, and uncover actionable insights to drive business growth.",
      icon: "mdi:chart-line", // Icon for Machine Learning Solutions
    },
    {
      title: "AI Agent Development",
      description:
        "We develop autonomous AI agents capable of reasoning, learning, and interacting with their environment to complete tasks independently, enhancing operational scalability and decision intelligence.",
      icon: "mdi:account-cog", // Icon for AI Agent (customizable)
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto ">
        <div className=" mb-9 ">
          <h2
            // ref={titleRef}
            className="text-[30px] sm:text-[40px] lg:text-[50px] max-w-4xl font-bold tracking-tight leading-tighttext-black"
          >
            Our AI & ML Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-3xl">
            We help you revamp your business models using cost-effective
            scalable solutions integrating AI/ML Tech. Together we can construct
            and establish catalyzing AI infrastructure that will bring agility,
            automation, and resilience to accomplish futuristic success.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((card, index) => (
            <div
              //   ref={(el) => (cardRefs.current[index] = el)}
              key={index}
              className="w-full rounded-3xl border border-gray-300 p-5"
            >
              <IconBox
                icon={card.icon}
                heading={card.title}
                content={card.description}
                primaryColor={card.primaryColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIMLServicesCards;
