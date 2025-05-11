import Header from "@/components/Header/Header";
import HeaderFull from "@/components/Header/HeaderFull";
import Design from "@/pages/services/design/Design";
// import Technology from "@/pages/services/technology/Technology";
import React from "react";

export const metadata = {
  title: "Zyeltrex  Solutions",
  description: "Zyeltrex  Solutions",
};

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderFull />
      <Design />
    </>
  );
};

export default page;
