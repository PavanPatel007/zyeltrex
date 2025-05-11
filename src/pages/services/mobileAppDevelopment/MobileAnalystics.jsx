import React from "react";
import { ParallaxSection } from "../webDevelopment/WebAnalysis";

const sections = [
  {
    title: "React Native Development",
    content:
      "React Native is the go-to solution for building high-performance mobile applications with a single codebase. By leveraging React Native, we deliver robust apps that work seamlessly across both iOS and Android platforms. Our team focuses on creating apps that offer native-like user experiences, reduce development time, and optimize costs while ensuring scalability for future growth.",
    imageSrc: "/assets/images/react-native.jpg",
    reverse: false,
  },
  {
    title: "Flutter Development",
    content:
      "Flutter, Google's revolutionary UI toolkit, empowers us to craft natively compiled applications with a single codebase. Its expressive widgets and high-performance rendering engine allow us to build stunning, fast, and smooth mobile apps for iOS and Android. With Flutter, we deliver visually appealing, feature-rich applications tailored to meet your business needs.",
    imageSrc: "/assets/images/flutter.jpg",
    reverse: true,
  },
];

const MobileAnalystics = () => {
  return (
    <>
      <div className="py-0">
        {sections.map((section, index) => (
          <ParallaxSection
            key={index}
            title={section.title}
            content={section.content}
            imageSrc={section.imageSrc}
            reverse={section.reverse}
          />
        ))}
      </div>
    </>
  );
};

export default MobileAnalystics;
