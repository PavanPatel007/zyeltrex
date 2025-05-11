// components/Common/CTASection.js

import Link from "next/link";

const CTASection = ({
  title,
  subtitle,
  bgColor = "bg-primary",
  textColor = "text-white",
  buttonLabel = "Contact Us",
  buttonLink = "/contact",
}) => {
  return (
    <section className={`${bgColor} container rounded-2xl py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
          {title}
        </h2>
        <p className={`text-lg md:text-xl mb-8 ${textColor}`}>{subtitle}</p>
        <Link
          href={buttonLink}
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
