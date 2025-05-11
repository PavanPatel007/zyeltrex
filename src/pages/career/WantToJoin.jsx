"use client";
import { openings } from "@/data/openings";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const WantToJoin = () => {
  const router = useRouter();

  const handleCardClick = (slug) => {
    router.push(`/career/${slug}`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-14">
        <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] max-w-2xl font-bold tracking-tight leading-tight mb-5">
          Want to join the team?
        </h1>
        <p className="max-w-4xl text-sm sm:text-base lg:text-2xl">
          Be our next human experience designer
        </p>
      </div>

      <div className="mb-14">
        <h1 className="text-[30px] sm:text-[30px] lg:text-[40px] max-w-2xl font-bold tracking-tight leading-tight">
          <span className="border-b-4 border-primary"> Openings </span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {openings.map((card) => (
          <div
            key={card.slug}
            className="w-full cursor-pointer bg-white"
            onClick={() => handleCardClick(card.slug)}
          >
            <div className="flex flex-col relative border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div
                  className="inline-flex items-center text-4xl p-4 rounded-lg bg-[#fff6f6]"
                  style={{ color: card.primaryColor }}
                >
                  <Icon icon={card.icon} />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-sm text-dark-gray">
                    Experience: {card.experience}
                  </p>
                </div>
                {/* View Button */}
                <button
                  className="bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary-dark transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/career/${card.slug}`);
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WantToJoin;
