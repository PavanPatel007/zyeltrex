//  ? Slide & Blur Transition
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;

    gsap.fromTo(
      overlay,
      { y: "100%", filter: "blur(2px)" },
      {
        y: "0%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(overlay, {
            y: "-100%",
            duration: 0.6,
            ease: "power2.inOut",
          });
        },
      }
    );
  }, [pathname]);

  return (
    <div className="relative">
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-gray-900/80 z-[100] backdrop-blur-lg"
      />
      {children}
    </div>
  );
};

export default PageTransition;

// ? Diagonal Wipe (Sliding Diagonal Panel)
// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//   const overlayRef = useRef(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const overlay = overlayRef.current;

//     gsap.fromTo(
//       overlay,
//       { x: "-100%", y: "-100%" },
//       {
//         x: "0%",
//         y: "0%",
//         duration: 0.6,
//         ease: "power2.inOut",
//         onComplete: () => {
//           gsap.to(overlay, {
//             x: "100%",
//             y: "100%",
//             duration: 0.6,
//             ease: "power2.inOut",
//           });
//         },
//       }
//     );
//   }, [pathname]);

//   return (
//     <div className="relative">
//       <div
//         ref={overlayRef}
//         className="fixed top-0 left-0 w-full h-full bg-[#111] z-[100]"
//       />
//       {children}
//     </div>
//   );
// };

// export default PageTransition;

// ? zoom out fade
// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//   const transitionRef = useRef(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const el = transitionRef.current;

//     gsap.fromTo(
//       el,
//       { scale: 1.1, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
//     );
//   }, [pathname]);

//   return <div ref={transitionRef}>{children}</div>;
// };

// export default PageTransition;

// ? Flip Card Transition

// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//   const wrapperRef = useRef(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const el = wrapperRef.current;

//     gsap.fromTo(
//       el,
//       { rotateY: 90, opacity: 0 },
//       { rotateY: 0, opacity: 1, duration: 1, ease: "power2.out" }
//     );
//   }, [pathname]);

//   return <div ref={wrapperRef}>{children}</div>;
// };

// export default PageTransition;

// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//   const wrapperRef = useRef(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const el = wrapperRef.current;

//     gsap.fromTo(
//       el,
//       { rotationY: 90, opacity: 0, transformPerspective: 1000 },
//       { rotationY: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
//     );
//   }, [pathname]);

//   return (
//     <div
//       ref={wrapperRef}
//       className="relative w-full h-full"
//       style={{ perspective: "1500px" }}
//     >
//       {children}
//     </div>
//   );
// };

// export default PageTransition;

// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//   const overlayRef = useRef(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const overlay = overlayRef.current;

//     // Animate from bottom to top with rounded corners
//     gsap.fromTo(
//       overlay,
//       { y: "100%", borderRadius: "50% 50% 0 0" },
//       {
//         y: "0%",
//         borderRadius: "50% 50% 0 0", // Keeps bottom corners rounded
//         duration: 1,
//         ease: "power2.inOut",
//         onComplete: () => {
//           // After animation is done, move the overlay off-screen to complete the effect
//           gsap.to(overlay, {
//             y: "-100%",
//             duration: 1,
//             ease: "power2.inOut",
//             delay: 0.2,
//           });
//         },
//       }
//     );
//   }, [pathname]);

//   return (
//     <div className="relative overflow-hidden">
//       {/* Overlay with rounded bottom corners */}
//       <div
//         ref={overlayRef}
//         className="fixed top-0 left-0 w-full h-full bg-black z-[100]"
//       />
//       {children}
//     </div>
//   );
// };

// export default PageTransition;
