// components/ImageAnimation.js
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import styles from "./ImageAnimation.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ImageAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Box animation
    tl.fromTo(
      `.${styles.box}`,
      {
        y: "-80%",
        opacity: 1,
      },
      {
        y: "0",
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        delay: 1,
      }
    )

      // Main image scale animation
      .from(
        `.${styles.mainImage}`,
        {
          scale: 1,
          duration: 2,
          ease: "expo.inOut",
        },
        "-=2"
      ) // Overlap slightly with the box animation

      // Wrapper image resizing
      .to(
        `.${styles.wrapperImg}`,
        {
          width: 400,
          height: 500,
          duration: 2,
          ease: "expo.inOut",
        },
        "-=2"
      )

      // Left & Right Image animations
      .from(`.${styles.left}`, {
        opacity: 0,
        duration: 0.4,
        ease: "expo.inOut",
      })
      .to(`.${styles.left}`, {
        x: "-300",
        rotation: -10,
        duration: 2,
        ease: "expo.inOut",
      })
      .to(
        `.${styles.right}`,
        {
          x: "300",
          rotation: 10,
          duration: 2,
          ease: "expo.inOut",
        },
        "-=2"
      );

    // TEXT ANIMATION (After all image animations)
    tl.fromTo(
      `.${styles.title} h1`,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out",
      },
      "+=0.5" // Delay after the last image animation
    ).fromTo(
      `.${styles.title} .iconAnimation`,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.8" // Slight overlap with text animation
    );
  }, []);

  return (
    <div className="">
      <div className={`${styles.container} container overflow-hidden`}>
        {/* Left & Right Images */}
        <div className={styles.images}>
          <div className={`${styles.img} ${styles.left}`}></div>
          <div className={`${styles.img} ${styles.right}`}></div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImage}>
          <div className={styles.wrapperImg}>
            {/* <div className={styles.box}></div> */}
            <div className={styles.imageWrapper}>
              <Image
                className={styles.mainImage}
                src="/images/img-two.jpeg"
                alt="Main image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* Header with Text Animation */}
        <div className={styles.header}>
          <div className={styles.title}>
            <h1 className="font-bold text-[80px] uppercase">
              We are <span className="spanClass ml-2 text-white">creative</span>
            </h1>
            <div className="flex items-center justify-center uppercase z-10">
              {/* <Icon
                icon="mynaui:fat-arrow-up-right"
                className="mr-4 text-[80px] iconAnimation"
              /> */}
              <h1 className="font-bold text-[80px]">digital agency</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnimation;
