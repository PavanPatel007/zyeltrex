import React from "react";

const ClientHome = () => {
  return (
    <section className="bg-black ">
      <div className="container mx-auto py-24 text-white">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 contact-left">
            <p className="font-semibold uppercase text-base md:text-base">
              Client
            </p>
            <h2 className="text-[48px] md:text-[58px] font-bold leading-[1em] contact-header">
              We make happy clients by interconnecting technology with business
              & art.
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-4 contact-right">
            <p className="text-lg font-medium md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptatem temporibus ad odit facere doloremque suscipit illo
              aperiam iusto laborum, dolores itaque. Esse!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHome;
