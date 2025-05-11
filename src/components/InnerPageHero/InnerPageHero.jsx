"use client";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const InnerPageHero = ({
  backgroundClass = "text-black max-w-5xl",
  containerClass = "container mx-auto py-24",
  leftContent = {
    title: "Technology",
    animationSequence: [
      "Decoding the power of coding.", // First text
      2000, // Wait 2 seconds
      "We design to empower human experiences.", // Second text
      2000, // Wait 2 seconds
    ],
    breadcrumb: [],
  },
  rightContent = {
    description: "",
  },
  leftClass = "space-y-6 contact-left",
  titleClass = "font-semibold uppercase text-base md:text-base mb-2",
  animationClass = "text-[38px] md:text-[48px] font-bold leading-[1em] contact-header block",
  breadcrumbClass = "text-sm text-gray-500 my-2",
  breadcrumbLinkClass = "text-primary hover:text-black",
  rightClass = "space-y-4 contact-right",
  descriptionClass = "text-lg font-medium md:text-xl",
  typeRepeat,
}) => {
  return (
    <section className={backgroundClass}>
      <div className={containerClass}>
        <div className="grid grid-cols-1  gap-12 items-center">
          {/* Left Side */}
          <div className={leftClass}>
            {/* Title */}
            <p className={titleClass}>{leftContent.title}</p>

            {/* Breadcrumb */}
            {Array.isArray(leftContent.breadcrumb) &&
              leftContent.breadcrumb.length > 0 && (
                <nav className={breadcrumbClass}>
                  {leftContent.breadcrumb.map((crumb, index) => (
                    <React.Fragment key={index}>
                      {crumb.href ? (
                        <Link href={crumb.href} className={breadcrumbLinkClass}>
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className={breadcrumbLinkClass}>
                          {crumb.label}
                        </span>
                      )}
                      {index < leftContent.breadcrumb.length - 1 && " / "}
                    </React.Fragment>
                  ))}
                </nav>
              )}

            {/* Animated Text */}
            <h2 className={animationClass}>
              <TypeAnimation
                sequence={leftContent.animationSequence}
                wrapper="span"
                cursor={true}
                repeat={typeRepeat || Infinity}
              />
            </h2>
          </div>

          {/* Right Side */}
          <div className={rightClass}>
            <p className={descriptionClass}>{rightContent.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerPageHero;
