import React from "react";

const ProjectAbout = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About the Project
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project showcases our approach to blending modern design with
            scalable technology. From concept to deployment, we focused on
            performance, accessibility, and a seamless user experience across
            devices.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Modern UI/UX design principles</li>
            <li>Optimized for performance and speed</li>
            <li>Built using React and Tailwind CSS</li>
            <li>Fully responsive and accessible</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="/assets/bg/agency.jpg"
            alt="Project Preview"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;
