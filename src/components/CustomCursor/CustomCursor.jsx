"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = ({ children }) => {
  const cursorRef = useRef(null);
  const cursorCircleRef = useRef(null);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorCircle = cursorCircleRef.current;
    // Move cursor
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const enlargeCursor = () => {
      gsap.to(cursor, { scale: 3, duration: 0.2 });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    // Detect hover on dark sections
    const checkBackground = (e) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;

      // Check if the hovered element or its parent has `.dark-section` class
      setIsDarkSection(!!element.closest(".dark-section"));

      // Check if the hovered element is a text element
      setIsTextHover(
        element.matches("h1, h2, h3, h4, h5, h6, p, span, a, strong, em , img ")
      );
    };

    window.addEventListener("mousemove", moveCursor);

    document
      .querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a, strong, em ")
      .forEach((el) => {
        el.addEventListener("mouseenter", enlargeCursor);
        el.addEventListener("mouseleave", shrinkCursor);
      });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", checkBackground);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", checkBackground);

      document
        .querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, a")
        .forEach((el) => {
          el.removeEventListener("mouseenter", enlargeCursor);
          el.removeEventListener("mouseleave", shrinkCursor);
        });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor 
          ${isDarkSection ? "white-cursor" : "black-cursor"} 
          ${isTextHover ? "large-cursor" : ""}`}
      />
      <div ref={cursorCircleRef} className="cursor-circle"></div>
      {children}
    </>
  );
};

export default CustomCursor;
