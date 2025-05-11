"use client";

import React from "react";
import { Icon } from "@iconify/react";

const IconBox = ({ icon, heading, content, primaryColor }) => {
  return (
    <div className="flex flex-grow flex-col relative ">
      {/* Icon Section */}
      <div className="mb-4">
        <div
          className="inline-flex items-center  text-4xl p-4 rounded-lg bg-[#efefef]"
          style={{ color: primaryColor }}
        >
          <Icon icon={icon} />
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        <h3 className="text-xl font-bold text-black  mb-4">{heading}</h3>
        <p className="text-sm text-dark-gray">{content}</p>
      </div>
    </div>
  );
};

export default IconBox;
