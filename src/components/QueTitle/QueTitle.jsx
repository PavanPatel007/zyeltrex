import React from "react";

const QueTitle = ({
  title = "",
  description = "",
  sectionClass = "",
  titleClass = "",
  descriptionClass = "",
}) => {
  return (
    <section className={`container py-14 ${sectionClass}`}>
      <div className="text-center md:text-left">
        <p
          className={`text-primary font-bold text-lg md:text-xl lg:text-2xl mb-4 ${titleClass}`}
        >
          {title}
        </p>
        <h2
          className={` ${descriptionClass} font-bold leading-snug md:leading-tight  text-3xl md:text-4xl lg:text-5xl`}
        >
          {description}
        </h2>
      </div>
    </section>
  );
};

export default QueTitle;
