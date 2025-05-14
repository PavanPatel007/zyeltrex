import HeaderFull from "@/components/Header/HeaderFull";
import ProjectsView from "@/pages/work/Projects/ProjectsView";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;
  return (
    <div>
      <HeaderFull />
      <ProjectsView slug={slug} />
    </div>
  );
};

export default page;
