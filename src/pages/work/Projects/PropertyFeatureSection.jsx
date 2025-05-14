"use client";
import { useState } from "react";

const features = [
  {
    title: "Detailed Property Reports",
    description:
      "Access comprehensive inspection reports with images and recommendations.",
  },
  {
    title: "Real-Time Inspection Updates",
    description:
      "Track inspections as they happen with real-time data and notifications.",
  },
  {
    title: "Mobile-Friendly Access",
    description: "View and manage inspections directly from any mobile device.",
  },
  {
    title: "Customizable Checklists",
    description:
      "Adapt inspection templates to suit specific property types and needs.",
  },
];

const PropertyFeatureSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Feature-Set of the Property
        </h2>
        <p className="text-gray-600 mt-2">
          Explore the key highlights of our inspection platform.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/assets/bg/agency.jpg"
            alt="Property features"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Right Accordion */}
        <div className="w-full">
          {features.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 font-semibold text-lg text-gray-800 flex justify-between items-center"
              >
                {item.title}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 pb-4 transition-all duration-300">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatureSection;
