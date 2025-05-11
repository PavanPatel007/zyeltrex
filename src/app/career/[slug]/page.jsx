import Header from "@/components/Header/Header";
import HeaderFull from "@/components/Header/HeaderFull";
import InnerPageHero from "@/components/InnerPageHero/InnerPageHero";
import { openings } from "@/data/openings";
import OpeningDetails from "@/pages/career/single/OpeningDetails";
import React from "react";

export const metadata = {
  title: "Zyeltrex  Solutions",
  description: "Zyeltrex  Solutions",
};

const page = async ({ params }) => {
  const slug = (await params).slug;
  const opening = openings.find((item) => item.slug === slug);

  return (
    <>
      {/* <Header /> */}
      <HeaderFull />
      <InnerPageHero
        backgroundClass="bg-black text-white"
        leftContent={{
          title: "Career",
          animationSequence: [`${opening?.heading}`, 3000],

          breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Career", href: "/career" },
            { label: "React", href: "" },
          ],
        }}
        breadcrumbLinkClass="text-white hover:underline"
        typeRepeat={0}
        // rightContent={{
        //   description:
        //     "Innovation connects ideas, creativity, and expertise to build a better future.",
        // }}
        leftClass="custom-left-class"
        descriptionClass="custom-description-class"
      />

      <OpeningDetails slug={slug} />
    </>
  );
};

export default page;
