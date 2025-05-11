"use client";
import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="elfsight-app-31297617-1427-4f4f-a81e-31ee532dc651"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightWidget;
