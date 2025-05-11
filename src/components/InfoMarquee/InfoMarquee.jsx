import React from "react";
import styles from "./InfoMarquee.module.css"; // Import the CSS file

const InfoMarquee = () => {
  const marqueeText = [
    "🚀 Special Discounts on Web Development!",
    "📱 Get Your Custom Mobile App Today!",
    "📊 Boost Your Business with Our Marketing Services!",
    "🎨 Stunning Designs for Every Need!",
    "📞 Contact Us Now for a Free Consultation!",
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        {marqueeText.map((text, index) => (
          <span key={index} className={styles.marqueeItem}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfoMarquee;
