"use client";
import React from "react";
import { Icon } from "@iconify/react";

const CEOSection = () => {
  return (
    <section className="container py-20 px-6 lg:px-12 bg-white mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* CEO Picture */}
        <div className="flex justify-center">
          <img
            src="/assets/team/avatar1.png" // Replace with your CEO's image URL
            alt="CEO"
            className="w-48 h-48 rounded-full object-cover shadow-xl"
          />
        </div>

        {/* CEO Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            A Message from Our CEO
          </h2>
          <p className="text-lg text-dark opacity-85">
            "At Zyeltrex, we are committed to providing innovative solutions
            that not only help businesses grow but also revolutionize their
            industries. Our focus has always been on building long-lasting
            relationships with our clients and delivering exceptional results
            through technology."
          </p>
          <p className="text-lg text-dark opacity-85">
            I believe in the power of collaboration and innovation. Our team at
            Zyeltrex works tirelessly to bring ideas to life, and together, we
            can achieve great things. Let's embark on a journey of growth and
            success.
          </p>

          {/* CEO Details */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl text-primary">
              <Icon icon="mdi:account-circle" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark">John Doe</h3>
              <p className="text-md text-gray-600">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
