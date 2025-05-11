"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Array of project objects with image data and metadata (e.g., title, description)
const projectData = [
  // {
  //   imageUrl: "/assets/projects/kd.png",
  //   title: "Project KD",
  // },
  {
    imageUrl: "/assets/projects/beacon.png",
    title: "Project Beacon",
  },
  {
    imageUrl: "/assets/projects/integrezoverseas.png",
    title: "Project Integrez",
  },
  {
    imageUrl: "/assets/projects/leakspecialist.png",
    title: "Project Leak Specialist",
  },
  {
    imageUrl: "/assets/projects/mymeerastore.png",
    title: "Project My Meera Store",
  },
];

const ProjectsSlider = ({ classes }) => {
  return (
    <div className={`projects-slider  ${classes}`}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        speed={2000}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },

          1600: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {/* Map through the projectData array to dynamically generate slides */}
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={400}
              className="w-full max-w-[500px] h-auto rounded-lg shadow-2xl mb-5"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            />
            {/* Optionally, display the title */}
            {/* <p className="text-center mt-2">{project.title}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsSlider;
