import React from "react";
import Image from "next/image";

const AboutTeam = () => {
  return (
    <>
      <section className="container  pt-14 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 ">
            <h2 className="text-[63px] font-semibold leading-[1.25em]">
              World-class designers and developers
            </h2>
          </div>
        </div>
      </section>
      <section className="container hidden pt-14 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 ">
            <p className="ml-16">
              As a leading digital agency in Paris, we look to engage with our
              clients beyond the conventional design and development agency
              relationship, becoming a partner to the people and companies we
              work with.
            </p>
          </div>
          <div className="lg:col-span-6 ">
            <p className="ml-16">
              We create brand identities, digital experiences, and print
              materials that communicate clearly achieve marketing goals, and
              look fantastic. Urban design draws together the many strands of
              place-making, environmental stewardship.
            </p>
          </div>
        </div>
      </section>
      <section className="container  pt-24 pb-14">
        {/* Team Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="relative flex flex-col items-center -mt-8">
            <Image
              src="/assets/team/avatar1.png"
              width={300}
              height={400}
              className="z-10"
              alt="Team Member 1"
            />
            <h3 className="mt-4 text-xl font-bold">John Doe</h3>
            <p className="text-gray-400 text-center">Lead Designer</p>
          </div>

          <div className="relative flex flex-col items-center ">
            <Image
              src="/assets/team/avatar2.png"
              width={300}
              height={400}
              className="z-10"
              alt="Team Member 2"
            />
            <h3 className="mt-4 text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-400 text-center">Project Manager</p>
          </div>
          {/* Team Member 3 (Raised Position) */}
          <div className="relative flex flex-col items-center -mt-16">
            <Image
              src="/assets/team/avatar3.png"
              width={300}
              height={400}
              className="z-10"
              alt="Team Member 3"
            />
            <h3 className="mt-4 text-xl font-bold">Alex Brown</h3>
            <p className="text-gray-400 text-center">Senior Developer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
