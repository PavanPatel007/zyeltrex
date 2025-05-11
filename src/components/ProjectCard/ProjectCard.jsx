// import React from "react";

// const ProjectCard = ({ image, title, description, onViewClick }) => {
//   return (
//     <div className="relative group p-8 rounded-lg border bg-gray-50 transition-transform hover:scale-105 hover:shadow-xl">
//       <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary transition-all duration-300"></div>

//       {/* Inner Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
//         {/* Text Content */}
//         <div className="flex-1">
//           <h3 className="font-bold text-2xl text-black mb-2">{title}</h3>
//           <p className="text-gray-700 text-base mb-4">{description}</p>
//           <button
//             onClick={onViewClick}
//             className="bg-primary text-white py-2 px-4 rounded-md hover:bg-dark-primary transition duration-300"
//           >
//             View
//           </button>
//         </div>

//         {/* Image */}
//         <div className="flex-shrink-0 w-full md:w-1/2 h-60">
//           <img
//             className="w-full h-full object-contain rounded-lg"
//             src={image}
//             alt={title}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectCard = ({
  image,
  title,
  description,
  link,
  bgColor,
  from,
  ...props
}) => {
  return (
    <div
      className={`group relative p-8  rounded-lg border transition-transform  hover:shadow-xl border-gradient hover:border-2 hover:border-primary h-full`}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      <div className=" relative z-10 flex flex-col items-center gap-4">
        {/* Image */}
        {image && (
          <div className="w-full h-60">
            <img
              className="w-full h-full object-contain rounded-lg"
              src={image}
              alt={title}
            />
          </div>
        )}

        {/* Text Content */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-2xl text-black">{title}</h3>
          <p className="text-dark-gray text-base">{description}</p>
          <div
            className={`${
              from ? "items-start justify-center" : ""
            } flex items-end justify-end `}
          >
            <Link
              href={link || "#"}
              target="_blank"
              className="mt-4 font-semibold text-black inline-flex items-center gap-2 relative transition duration-300"
            >
              View
              <Icon
                icon="mdi:arrow-right"
                className="text-xl transition-transform group-hover:translate-x-1 duration-300"
              />
              {/* Bottom border animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
