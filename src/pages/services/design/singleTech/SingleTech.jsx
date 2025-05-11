"use client";
import InnerPageHero from "@/components/InnerPageHero/InnerPageHero";
import QueTitle from "@/components/QueTitle/QueTitle";
import RoundedLetsTalk from "@/components/RoundedLetsTalk/RoundedLetsTalk";
import TechList from "@/components/TechList/TechList";
import {
  designServices,
  mobileServices,
  webServices,
} from "@/data/webServices";
import { useRouter } from "next/navigation";
import React from "react";

const SingleTech = ({ slug }) => {
  const router = useRouter();

  const services = [...designServices];

  const tech = services?.find((item) => item.slug === slug);

  //   if (!tech) {
  //     router.back();
  //   }

  return (
    <>
      <InnerPageHero
        leftContent={{
          title: tech?.hero?.title || "",
          animationSequence: tech?.hero?.animationSequence || [],
          breadcrumb: tech?.hero?.breadcrumb || [],
        }}
        leftClass="custom-left-class"
        descriptionClass="custom-description-class"
        backgroundClass="bg-black text-white"
        breadcrumbClass="my-3"
        breadcrumbLinkClass="text-white hover:text-primary"
      />

      <QueTitle
        title={tech?.queTitle?.title}
        description={tech?.queTitle?.description}
        descriptionClass="font-normal lg:text-3xl "
      />
      <QueTitle
        title="What do we serve?"
        description="A full range of technology services that integrate with business and design."
        descriptionClass="lg:text-4xl"
      />
      <TechList services={designServices} title={`Design.`} />
      {/* <TechList services={mobileServices} title={`Mobile Apps.`} /> */}
      <RoundedLetsTalk />
    </>
  );
};

export default SingleTech;
