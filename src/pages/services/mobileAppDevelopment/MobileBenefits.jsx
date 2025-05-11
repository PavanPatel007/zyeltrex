import React from "react";
import { Icon } from "@iconify/react";

const MobileBenefits = () => {
  const benefits = [
    {
      icon: "mdi:monitor",
      label: "Software as a Service",
      description:
        "51% of smartphone users have discovered a new company or product.",
    },
    {
      icon: "mdi:shield-check",
      label: "Internet of Things",
      description:
        "Move your SaaS products to mobile, Companies with a professional mobile.",
    },
    {
      icon: "mdi:rocket-launch",
      label: "Gambling & Betting",
      description:
        "Develop a custom mobile app to thrive in a mobile market worth over $100.",
    },
    {
      icon: "mdi:web",
      label: "Social Media",
      description:
        "80% of time users spend in social media from their mobile devices.",
    },
    {
      icon: "mdi:cloud",
      label: "Business Management",
      description:
        "65% of sales representatives have achieved their quotas by adopting.",
    },
    {
      icon: "mdi:account-group",
      label: "Trading Systems",
      description:
        "We provide top-tier mobile app development services for brokers.",
    },
  ];

  return (
    <section className="text-black py-14">
      <div className="container  ">
        <h2 className="text-center text-4xl font-bold mb-12">
          Mobile App Development Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col   space-y-4 px-6">
              <div className="text-primary text-6xl">
                <Icon icon={benefit.icon} />
              </div>
              <h3 className="text-xl font-semibold">{benefit.label}</h3>
              <p className="text-sm text-dark-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileBenefits;
