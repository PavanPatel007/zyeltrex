import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutTalk from "@/pages/about/AboutTalk";
import HomeTextMarquee from "@/pages/home/HomeTextMarquee";
import WebAnalysis from "@/pages/services/webDevelopment/WebAnalysis";
import WebBenefits from "@/pages/services/webDevelopment/webBenefits";

export const metadata = {
  title: "Web Development Services | Zyeltrex Web Solution",
  description:
    "Zyeltrex offers top-notch web development services, including custom websites, e-commerce solutions, and web applications, all designed to grow your business in the digital world.",
  keywords: [
    "Web Development",
    "Custom Web Development",
    "E-commerce Development",
    "Web Design",
    "Web Applications",
    "Zyeltrex Web Solution",
    "Responsive Websites",
    "UI/UX Design",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Web Development Services | Zyeltrex Web Solution",
    description:
      "At Zyeltrex, we build custom, scalable, and high-performing websites tailored to your business needs. Our web development services include e-commerce solutions and web applications.",
    url: "https://www.zyeltrex.com/services/web-development",
    siteName: "Zyeltrex Web Solution",
    images: [
      {
        url: "https://www.zyeltrex.com/assets/images/og-web-development.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Web Development Services Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Zyeltrex",
    creator: "@Zyeltrex",
    title: "Web Development Services | Zyeltrex Web Solution",
    description:
      "Zyeltrex Web Solution offers expert web development services, creating custom websites, web apps, and e-commerce solutions for your business.",
    images: ["https://www.zyeltrex.com/assets/images/og-web-development.jpg"], // Replace with your image
  },
};

const page = () => {
  return (
    <>
      <HeaderFull />
      {/* <WebDevelopmentHome /> */}
      <HeroSection
        title="Web Development"
        subtitle=""
        gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      <WebAnalysis />
      <WebBenefits />
      <div className="">
        {/* <HomeTextMarquee /> */}
        <HomeTextMarquee />
      </div>
      <div className="my-10">
        <AboutTalk />
      </div>
      {/* <ProjectsSlider /> */}
    </>
  );
};

export default page;
