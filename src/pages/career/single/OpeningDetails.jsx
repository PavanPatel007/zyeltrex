import { siteInfo } from "@/config/siteConfig";
import { openings } from "@/data/openings";
import Image from "next/image";
import Link from "next/link";

const OpeningDetails = async ({ slug }) => {
  const opening = openings.find((item) => item.slug === slug);

  if (!opening) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Side */}
        <div className="col-span-2">
          <div className="mb-8">
            <p className="text-lg lg:text-xl text-dark-gray mb-4 max-w-4xl">
              {opening.description}
            </p>
          </div>

          {/* Key Points */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              <span className="border-b border-primary">Key Points</span>
            </h2>
            <ul className="list-disc list-inside text-base lg:text-lg text-dark-gray mb-4 max-w-4xl">
              {opening.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Technical Knowledge */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              <span className="border-b border-primary">
                Technical Knowledge
              </span>
            </h2>
            <ul className="list-disc list-inside text-base lg:text-lg text-dark-gray mb-4 max-w-4xl">
              {opening.techKnow.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full flex items-center justify-center">
              <Image
                src="/assets/logo/logo-black.svg"
                alt="Zyeltrex  Web Solution"
                width={150}
                height={60}
                className="w-full"
              />
              {/* <p className="text-gray-500">Logo</p> */}
            </div>
          </div>

          {/* Job Location */}
          {opening.location && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Job Location</h3>
              <p className="text-base text-dark-gray">
                {opening.location || ""}
              </p>
            </div>
          )}

          {/* Apply Button */}
          <Link
            href={`mailto:${siteInfo.email.career}`}
            className="bg-primary text-white w-full text-center block px-6 py-3 rounded-lg font-bold text-lg hover:bg-primary-dark transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpeningDetails;
