import { slugify } from "@/utils/slugify";
import { aiMLBlog, flutterBlog } from "./blogsDesc/blogsDescription";

export const blogsData = [
  {
    id: 2,
    slug: slugify("Latest Trends in AI/ML"),
    title: "Latest Trends in AI/ML",
    description: aiMLBlog,
    image: "/assets/blog/ai-ml-blog.jpg",
    imgAlt: "AI and Machine Learning",
    pastedBy: "AI Analyst",
    date: "10/05/2025",
    viewDate: "May 10, 2025",
    meta: {
      description:
        "Explore the cutting-edge advancements in AI and ML that are shaping industries in 2024, from generative AI to AI in healthcare, NLP, and more.",
      keywords:
        "AI Trends 2024, Machine Learning, NLP, Generative AI, AI Healthcare",
    },
  },
  {
    id: 3,
    slug: slugify("Flutter: The Future of Mobile App Development"),
    title: "Flutter: The Future of Mobile App Development",
    description: flutterBlog,
    image: "/assets/blog/flutter-blog.jpg",
    imgAlt: "Flutter Mobile Development",
    pastedBy: "Mobile Dev Expert",
    date: "23/10/2024",
    viewDate: "October 23, 2024",
    meta: {
      description:
        "Discover how Flutter is transforming mobile app development with a single codebase, beautiful UIs, hot reload, and high performance.",
      keywords:
        "Flutter 2024, Cross-platform Development, Mobile App Trends, Flutter UI",
    },
  },
];
