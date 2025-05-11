const HeroSection = ({ title, subtitle, gradient }) => {
  return (
    <div
      className={`text-white min-h-[90vh] flex items-center justify-center text-center ${
        gradient
          ? gradient
          : "bg-gradient-to-br from-blue-900 via-purple-900 to-black"
      }`}
      // style={gradient ? { backgroundImage: gradient } : {}}
    >
      <div className="container px-4 py-12 md:py-20">
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg font-medium mt-4">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
