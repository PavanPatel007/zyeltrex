// constants/seo.config.js

import { ROUTE } from "@/routes/routes";

export const SEO_META_URL = "https://www.zyeltrex.com";

export const SEO_IMAGES = {
  default: {
    url: "/og/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: "Zyeltrex Solutions – Powerful Digital Experiences",
  },
};

export const SEO_DATA = {
  siteName: "Zyeltrex Solutions",
  twitterHandle: "@Zyeltrex",
  authors: [{ name: "Zyeltrex", url: "https://zyeltrex.com/" }],

  about: {
    title: "About Zyeltrex Web Solution",
    description:
      "Zyeltrex Web Solution is a digital agency offering innovative web development, design, and branding services to help businesses grow in the digital world.",
    keywords: [
      "Zyeltrex",
      "Solutions",
      "Web Development",
      "Digital Agency",
      "Branding",
      "Web Design",
    ],
    url: `${SEO_META_URL}${ROUTE.about}`,
  },

  contact: {
    title: "Contact Zyeltrex Web Solution",
    description:
      "Get in touch with Zyeltrex Web Solution for innovative web development, branding, and design services. Let’s build your next digital experience.",
    keywords: [
      "Contact Zyeltrex",
      "Get in touch",
      "Web Development Support",
      "Digital Agency Contact",
      "Website Design Help",
    ],
    url: `${SEO_META_URL}${ROUTE.contact}`,
  },

  blog: {
    title: "Explore Latest Blogs - Zyeltrex Solutions",
    description:
      "Stay informed with the latest insights, tips, and trends in web design, development, and SEO from Zyeltrex Solutions in Ahmedabad. Discover expert advice to elevate your online presence.",
    keywords:
      "web design blog, web development tips, SEO strategies, zyeltrex blogs, Ahmedabad Solutions, latest tech updates, website optimization, digital marketing tips, online presence blogs",
    url: `${SEO_META_URL}${ROUTE.blog}`,
  },

  webDevelopment: {
    title: "Web Development Services - Zyeltrex Solutions",
    description:
      "Zyeltrex Web Solutions specializes in custom web development services to build scalable, responsive, and user-friendly websites and applications that meet your business needs.",
    keywords: [
      "Web Development",
      "Custom Web Development",
      "Web Development Agency",
      "Responsive Web Design",
      "Scalable Websites",
      "Web Applications",
      "Website Development",
    ],
    url: `${SEO_META_URL}${ROUTE.services.webDevelopment}`,
  },

  mobileAppDevelopment: {
    title: "Mobile App Development Services - Zyeltrex Solutions",
    description:
      "Zyeltrex specializes in developing high-quality mobile applications for iOS and Android, offering end-to-end mobile app development solutions that cater to your business needs.",
    keywords: [
      "Mobile App Development",
      "iOS App Development",
      "Android App Development",
      "Mobile Solutions",
      "App Development Agency",
      "Custom Mobile Apps",
      "App Design and Development",
    ],
    url: `${SEO_META_URL}${ROUTE.services.appDevelopment}`,
  },
  aiMLDevelopment: {
    title: "AI/ML Development Services - Zyeltrex Solutions",
    description:
      "Zyeltrex specializes in AI and ML development, offering solutions that enhance automation, predictive analytics, and intelligent decision-making for your business.",
    keywords: [
      "AI Development",
      "Machine Learning",
      "Artificial Intelligence",
      "AI Solutions",
      "ML Solutions",
      "Predictive Analytics",
      "Data Science",
      "Automation Development",
      "Intelligent Systems",
    ],
    url: `${SEO_META_URL}${ROUTE.services.aiMlDevelopment}`,
  },
};
