import CollaborationSection from "@/components/CollaborationSection/CollaborationSection";
import HeaderFull from "@/components/Header/HeaderFull";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutInfo from "@/pages/about/AboutInfo";
import AboutInnovation from "@/pages/about/AboutInnovation";
import AboutTalk from "@/pages/about/AboutTalk";

export const metadata = {
  title: "About Zyeltrex Web Solution",
  description:
    "Zyeltrex Web Solution is a digital agency offering innovative web development, design, and branding services to help businesses grow in the digital world.",
  keywords: [
    "Zyeltrex",
    "Solutions",
    "Web Development",
    "Digital Agency",
    "Branding",
    "Web Design",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Zyeltrex Web Solution",
    description:
      "Zyeltrex Web Solution is a digital agency offering innovative web development, design, and branding services to help businesses grow in the digital world.",
    url: "https://www.zyeltrex.com/about",
    siteName: "Zyeltrex Web Solution",
    images: [
      {
        url: "https://www.zyeltrex.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Zyeltrex Web Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Zyeltrex",
    creator: "@Zyeltrex",
    title: "About Zyeltrex Web Solution",
    description:
      "Zyeltrex Web Solution is a digital agency offering innovative web development, design, and branding services.",
    images: ["https://www.zyeltrex.com/assets/images/og-image.jpg"],
  },
};

const page = () => {
  return (
    <>
      {" "}
      {/* <Header /> */}
      <HeaderFull />
      <HeroSection
        title="About Us"
        subtitle="Transforming Ideas into Digital Solutions"
        gradient="linear-gradient(80deg, var(--primary) 1%, #000 40%)"
      />
      {/* <AboutHome /> */}
      <AboutInfo />
      <AboutInnovation />
      {/* <AboutBeyond /> */}
      {/* <AboutTeam /> */}
      {/* <AboutTestimonials /> */}
      <CollaborationSection />
      <AboutTalk />
    </>
  );
};

export default page;
