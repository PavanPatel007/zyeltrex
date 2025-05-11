import Image from "next/image";
import React from "react";

const ChooseStack = () => {
  return (
    <div className="container py-14">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Choose Your Stack</h2>
        <p className="font-medium text-base mt-4 text-gray-600 max-w-2xl mx-auto">
          Want to build a native mobile app or a cross-platform application? The
          best tech stack you choose for your app is one of the most critical
          decisions you’ll have to make.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-gray-100 shadow-b-lg rounded-lg">
          <Image
            src="/assets/images/mobileapp1.jpg"
            width={400}
            height={400}
            alt="Native app development"
            className="rounded-t-md  w-full max-h-[300px] object-cover"
          />
          <div className="py-10 px-6">
            <h3 className="text-2xl font-bold mb-4">Native App Development</h3>
            <p className="text-black ">
              Our native app development service for either iOS or Android
              allows our developers to build highly performant mobile
              applications with tighter security and quality user experiences
              for your company.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-gray-100 shadow-b-lg rounded-lg">
          <Image
            src="/assets/images/cross-platform.jpg"
            width={400}
            height={400}
            alt="Cross-Platform Development"
            className="rounded-t-md  w-full max-h-[300px] object-cover"
          />
          <div className="py-10 px-6">
            <h3 className="text-2xl font-bold mb-4">
              Cross-Platform Development
            </h3>
            <p className="text-black ">
              Build cross-platform applications with consistent performance and
              quality user experiences on both iOS and Android. Ideal for
              businesses seeking to maximize their audience reach efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseStack;
