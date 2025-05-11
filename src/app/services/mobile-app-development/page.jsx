import CollaborationSection from "@/components/CollaborationSection/CollaborationSection";
import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutTalk from "@/pages/about/AboutTalk";
import ChooseStack from "@/pages/services/mobileAppDevelopment/ChooseStack";
import MobileAnalystics from "@/pages/services/mobileAppDevelopment/MobileAnalystics";
import MobileBenefits from "@/pages/services/mobileAppDevelopment/MobileBenefits";

export const metadata = {
  title: "Mobile App Development | Zyeltrex Web Solution",
  description:
    "Build powerful Android, iOS, and cross-platform apps with Zyeltrex. We craft secure, scalable, and high-performance mobile applications tailored to your business goals.",
  keywords: [
    "Mobile App Development",
    "Android App Development",
    "iOS App Development",
    "Cross Platform App",
    "React Native",
    "Flutter",
    "Mobile Solutions",
    "Zyeltrex Web Solution",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mobile App Development | Zyeltrex Web Solution",
    description:
      "We develop robust and modern mobile apps for Android and iOS platforms. Discover our seamless and scalable mobile development services.",
    url: "https://www.zyeltrex.com/services/mobile-app-development",
    siteName: "Zyeltrex Web Solution",
    images: [
      {
        url: "https://www.zyeltrex.com/assets/images/og-mobile-app.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Zyeltrex",
    creator: "@Zyeltrex",
    title: "Mobile App Development | Zyeltrex Web Solution",
    description:
      "Custom Android and iOS app development with Zyeltrex. Empower your business with seamless mobile experiences.",
    images: ["https://www.zyeltrex.com/assets/images/og-mobile-app.jpg"], // Same image or custom one
  },
};

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderFull />
      {/* <MobileAppDevelopmentHome /> */}
      <HeroSection
        title="Mobile App Development"
        subtitle=""
        gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      <ChooseStack />
      <MobileAnalystics />
      <MobileBenefits />
      {/* <OurPortfolio /> */}
      <CollaborationSection />
      <div className="my-10">
        <AboutTalk />
      </div>
    </>
  );
};

export default page;
