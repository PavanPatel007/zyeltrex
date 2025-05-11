import Header from "@/components/Header/Header";
import HeaderFull from "@/components/Header/HeaderFull";
import { projects } from "@/data/projects";
import OurWork from "@/pages/work/OurWork";
import React from "react";

export const metadata = {
  title: "Our Work - Zyeltrex  Solutions",
  description: "Zyeltrex  Solutions",
};

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderFull />
      <OurWork projects={projects} />
    </>
  );
};

export default page;
