"use client";

import CustomCursor from "@/components/CustomCursor/CustomCursor";
import PageTransition from "@/components/PageTransition/PageTransition";

const RootWrapper = ({ children }) => {
  // useEffect(() => {
  //   const sections = document.querySelectorAll("[data-bgcolor]");

  //   const observerOptions = {
  //     root: null, // relative to viewport
  //     rootMargin: "0px", // no margin
  //     threshold: 0.5, // trigger when 50% of the section is visible
  //   };

  //   const onIntersect = (entries) => {
  //     entries.forEach((entry) => {
  //       const section = entry.target;
  //       const bgcolor = section.getAttribute("data-bgcolor");
  //       const textColor = section.getAttribute("data-textcolor");

  //       // When the section is in view
  //       if (entry.isIntersecting) {
  //         // Animate background color and text color change using GSAP
  //         gsap.to(document.body, {
  //           backgroundColor: bgcolor,
  //           color: textColor,
  //           duration: 1,
  //           ease: "power2.out",
  //         });
  //       } else {
  //         gsap.to(document.body, {
  //           backgroundColor: "#ffffff",
  //           color: "#000000", // Set default text color (or you can use "")
  //           duration: 1, // Same duration for a smooth transition back
  //           ease: "power2.out",
  //         });
  //       }
  //     });
  //   };

  //   // Create an IntersectionObserver instance
  //   const observer = new IntersectionObserver(onIntersect, observerOptions);

  //   // Observe each section with data-bgcolor attribute
  //   sections.forEach((section) => observer.observe(section));

  //   // Cleanup observer on component unmount
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      {/* <ReactLenis root options={{ lerp: 0.08 }}> */}
      <CustomCursor />
      {/* <CursorManager /> */}
      <PageTransition>{children}</PageTransition>
      {/* </ReactLenis> */}
    </>
  );
};

export default RootWrapper;
