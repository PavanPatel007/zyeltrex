const HeroSection = ({ title, subtitle, gradient }) => {
  return (
    <div
      className="bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white min-h-[90vh] flex items-center justify-center text-center"
      // style={{
      //   backgroundImage:
      //     gradient || "linear-gradient(80deg, var(--primary) 1%, #000 40%)",
      // }}
    >
      <div className="container py-14">
        <div>
          <h2 className="text-[80px] font-bold">{title}</h2>
          <p className="text-lg font-medium">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
