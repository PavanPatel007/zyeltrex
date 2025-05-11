"use client";
import React, { useState, useEffect } from "react";
import LightCursor from "./LightCursor";
import DarkCursor from "./DarkCursor";

const CursorManager = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkBackground = (e) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;

      const bgColor = window.getComputedStyle(element).backgroundColor;
      const [r, g, b] = bgColor.match(/\d+/g).map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Luminance formula

      setIsDark(brightness < 128); // Dark mode threshold
    };

    window.addEventListener("mousemove", checkBackground);
    return () => window.removeEventListener("mousemove", checkBackground);
  }, []);

  return isDark ? <DarkCursor /> : <LightCursor />;
};

export default CursorManager;
