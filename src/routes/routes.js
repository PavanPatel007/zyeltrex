import { root } from "postcss";

const TECHROOT = "/technology";

export const ROUTE = {
  home: "/",
  about: "/about-us",

  career: "/career",
  services: {
    webDevelopment: "/services/web-development",
    appDevelopment: "/services/mobile-app-development",
    wpDevelopment: "/services/wordpress-development",
    aiMlDevelopment: "/services/ai-ml-development",
  },
  contact: "/contact",
  design: {
    root: "/design",
  },
  technology: {
    root: TECHROOT,
    react: `${TECHROOT}/react`,
  },
  marketing: {
    root: "/marketing",
  },
  work: {
    root: "/our-work",
  },
  client: {
    root: "/client",
  },
  blog: {
    root: "/blog",
  },
};
