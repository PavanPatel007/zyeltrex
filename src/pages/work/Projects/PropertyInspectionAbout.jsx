import React from "react";

const PropertyInspectionAbout = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About the Property Inspection Website
        </h2>
        <p className="text-lg text-gray-700">
          Our property inspection platform streamlines the inspection process by
          offering an intuitive interface, real-time reporting, and seamless
          communication between inspectors, property owners, and agencies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <img
          src="/assets/bg/agency.jpg"
          alt="Property Inspection Website"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default PropertyInspectionAbout;
