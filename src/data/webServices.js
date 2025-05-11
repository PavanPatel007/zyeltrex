import { ROUTE } from "@/routes/routes";

// export const webServices = [
//   {
//     slug: "react",
//     href: ROUTE.technology.react,
//     label: "React",
//     description: "Create fast and flexible user interfaces.",
//     icon: "mdi:react",
//     hero: {
//       title: "React",
//       animationSequence: [
//         "React is a component-based library which is used to develop interactive UI’s (User Interfaces).",
//         3000,
//         " It is currently one of the most popular JavaScript front-end libraries.web development company",
//         3000,
//       ],

//       breadcrumb: [
//         { label: "Home", href: "/" },
//         { label: "Technology", href: "/technology" },
//         { label: "React", href: "" },
//       ],
//     },
//     queTitle: {
//       title: "What is React?",
//       description:
//         "React is a JavaScript library that specializes in helping developers build user interfaces, or UIs. In terms of websites and web applications, UIs are the collection of on-screen menus, search bars, buttons, and anything else someone interacts with to USE a website or app ",
//     },
//   },
//   {
//     href: ROUTE.career,
//     label: "Web Design",
//     description: "Craft engaging and visually stunning websites.",
//     icon: "carbon:paint-brush",
//   },
//   {
//     href: ROUTE.career,
//     label: "Development",
//     description: "Build robust and scalable applications.",
//     icon: "carbon:code",
//   },
//   {
//     href: ROUTE.career,
//     label: "Front-end",
//     description: "Create interactive and dynamic user interfaces.",
//     icon: "ic:baseline-web",
//   },
//   {
//     href: ROUTE.career,
//     label: "Back-end",
//     description: "Develop secure and efficient server-side logic.",
//     icon: "ion:server-outline",
//   },
//   {
//     href: ROUTE.career,
//     label: "JavaScript",
//     description: "Master the language of the web.",
//     icon: "fluent:code-js-rectangle-16-regular",
//   },
//   {
//     href: ROUTE.career,
//     label: "CSS 3",
//     description: "Style your web presence with modern design.",
//     icon: "proicons:css-2",
//   },
//   {
//     href: ROUTE.career,
//     label: "Animations",
//     description: "Bring your designs to life with motion.",
//     icon: "fluent:arrow-sync-20-filled",
//   },

//   {
//     href: ROUTE.career,
//     label: "ERP",
//     description: "Develop enterprise resource planning systems.",
//     icon: "mdi:account-cash-outline",
//   },
//   {
//     href: ROUTE.career,
//     label: "WordPress",
//     description: "Design stunning WordPress websites.",
//     icon: "hugeicons:wordpress",
//   },
//   {
//     href: ROUTE.career,
//     label: "PHP",
//     description: "Master back-end development with PHP.",
//     icon: "lineicons:php",
//   },
//   {
//     href: ROUTE.career,
//     label: "Laravel",
//     description: "Create elegant applications with Laravel.",
//     icon: "mdi:laravel",
//   },
//   {
//     href: ROUTE.career,
//     label: "E-commerce",
//     description: "Build scalable online stores.",
//     icon: "mdi:cart-outline",
//   },
// ];

export const webServices = [
  {
    slug: "html",
    href: "/technology/html",
    label: "HTML",
    description: "Build the structure of web pages with HTML.",
    icon: "mdi:language-html5",
    hero: {
      title: "HTML Development",
      animationSequence: [
        "HTML forms the backbone of all web pages.",
        3000,
        "Learn how HTML is used to structure websites and applications.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "HTML", href: "/technology/html" },
      ],
    },
    queTitle: {
      title: "What is HTML?",
      description:
        "HTML, or HyperText Markup Language, is the standard language for creating and structuring web pages and applications.",
    },
  },
  {
    slug: "css",
    href: "/technology/css",
    label: "CSS",
    description: "Style your web presence with CSS.",
    icon: "mdi:language-css3",
    hero: {
      title: "CSS Development",
      animationSequence: [
        "CSS brings your web pages to life with styles and layouts.",
        3000,
        "Explore how CSS helps create visually stunning designs.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "CSS", href: "/technology/css" },
      ],
    },
    queTitle: {
      title: "What is CSS?",
      description:
        "CSS, or Cascading Style Sheets, is used to style and layout web pages, controlling colors, fonts, and more.",
    },
  },
  {
    slug: "javascript",
    href: "/technology/javascript",
    label: "JavaScript",
    description: "Master the language of the web.",
    icon: "fluent:code-js-rectangle-16-regular",
    hero: {
      title: "JavaScript Development",
      animationSequence: [
        "JavaScript is the driving force behind dynamic web applications.",
        3000,
        "Discover how JavaScript adds interactivity and logic to websites.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "JavaScript", href: "/technology/javascript" },
      ],
    },
    queTitle: {
      title: "What is JavaScript?",
      description:
        "JavaScript is a versatile programming language used to add interactivity and logic to websites and applications.",
    },
  },
  {
    slug: "react",
    href: "/technology/react",
    label: "React",
    description: "Create fast and flexible user interfaces.",
    icon: "mdi:react",
    hero: {
      title: "React",
      animationSequence: [
        "React is a component-based library used to develop interactive UIs.",
        3000,
        "It is currently one of the most popular JavaScript front-end libraries.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "React", href: "/technology/react" },
      ],
    },
    queTitle: {
      title: "What is React?",
      description:
        "React is a JavaScript library that helps developers build user interfaces efficiently using reusable components.",
    },
  },
  {
    slug: "nextjs",
    href: "/technology/nextjs",
    label: "Next.js",
    description: "Leverage server-side rendering with Next.js.",
    icon: "tabler:brand-nextjs",
    hero: {
      title: "Next.js Development",
      animationSequence: [
        "Next.js enhances web performance with server-side rendering.",
        3000,
        "Optimize your web applications using Next.js.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "Next.js", href: "/technology/nextjs" },
      ],
    },
    queTitle: {
      title: "What is Next.js?",
      description:
        "Next.js is a React framework that enables server-side rendering and static site generation for fast and scalable web applications.",
    },
  },
  {
    slug: "php",
    href: "/technology/php",
    label: "PHP",
    description: "Master back-end development with PHP.",
    icon: "lineicons:php",
    hero: {
      title: "PHP Development",
      animationSequence: [
        "PHP is a popular server-side scripting language.",
        3000,
        "Build dynamic and data-driven websites with PHP.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "PHP", href: "/technology/php" },
      ],
    },
    queTitle: {
      title: "What is PHP?",
      description:
        "PHP is a widely-used open-source scripting language designed for web development and server-side applications.",
    },
  },
  {
    slug: "laravel",
    href: "/technology/laravel",
    label: "Laravel",
    description: "Create elegant applications with Laravel.",
    icon: "mdi:laravel",
    hero: {
      title: "Laravel Development",
      animationSequence: [
        "Laravel simplifies back-end development with expressive syntax.",
        3000,
        "Build robust web applications using Laravel.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "Laravel", href: "/technology/laravel" },
      ],
    },
    queTitle: {
      title: "What is Laravel?",
      description:
        "Laravel is a PHP framework that makes web development easier and more efficient with its elegant syntax and extensive features.",
    },
  },
  {
    slug: "codeigniter",
    href: "/technology/codeigniter",
    label: "CodeIgniter",
    description: "Develop scalable web applications with CodeIgniter.",
    icon: "mdi:code-json",
    hero: {
      title: "CodeIgniter Development",
      animationSequence: [
        "CodeIgniter is a lightweight PHP framework.",
        3000,
        "Quickly build scalable web applications with CodeIgniter.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "CodeIgniter", href: "/technology/codeigniter" },
      ],
    },
    queTitle: {
      title: "What is CodeIgniter?",
      description:
        "CodeIgniter is a lightweight PHP framework designed for developers who need a simple and elegant toolkit to create full-featured web applications.",
    },
  },
  {
    slug: "python",
    href: "/technology/python",
    label: "Python",
    description: "Leverage Python for web and software development.",
    icon: "mdi:language-python",
    hero: {
      title: "Python Development",
      animationSequence: [
        "Python is a versatile and powerful programming language.",
        3000,
        "Use Python to build web applications, APIs, and more.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "Python", href: "/technology/python" },
      ],
    },
    queTitle: {
      title: "What is Python?",
      description:
        "Python is a general-purpose programming language known for its readability and versatility, widely used in web development, data analysis, and more.",
    },
  },
  {
    slug: "django",
    href: "/technology/django",
    label: "Django",
    description: "Develop secure and scalable applications with Django.",
    icon: "akar-icons:django-fill",
    hero: {
      title: "Django Development",
      animationSequence: [
        "Django is a high-level Python web framework.",
        3000,
        "Build secure and scalable applications using Django.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "Django", href: "/technology/django" },
      ],
    },
    queTitle: {
      title: "What is Django?",
      description:
        "Django is a Python-based web framework that encourages rapid development and clean, pragmatic design, ideal for secure and scalable web applications.",
    },
  },
];
export const mobileServices = [
  {
    slug: "ios",
    href: "/technology/ios",
    icon: "mdi:apple-ios",
    label: "IOS",
    description: "Develop native iOS applications with stunning designs.",
    hero: {
      title: "iOS Development",
      animationSequence: [
        "We specialize in creating stunning, high-performance iOS applications.",
        3000,
        "Explore our iOS app development solutions tailored for your business.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "iOS Development", href: "/technology/ios" },
      ],
    },
    queTitle: {
      title: "What is IOS?",
      description:
        "iOS is one of the most popular mobile operating system developed and created by Apple Inc. An iOS device is an electronic gadget that runs on iOS.",
    },
  },
  {
    slug: "react-native",
    href: "/technology/react-native",
    icon: "tabler:brand-react-native",
    label: "React Native",
    description: "Create powerful native apps tailored to your needs.",
    hero: {
      title: "React Native Development",
      animationSequence: [
        "Build cross-platform mobile apps with React Native.",
        3000,
        "Leverage React Native for faster and efficient app development.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "React Native", href: "/technology/react-native" },
      ],
    },
    queTitle: {
      title: "What is React Native?",
      description:
        "React Native is a popular framework for building mobile applications using JavaScript and React, enabling cross-platform compatibility.",
    },
  },
  {
    slug: "flutter",
    href: "/technology/flutter",
    icon: "material-symbols-light:flutter",
    label: "Flutter",
    description: "Combine native and web technologies for cross-platform apps.",
    hero: {
      title: "Flutter Development",
      animationSequence: [
        "Develop high-performance cross-platform apps with Flutter.",
        3000,
        "Flutter empowers you to build expressive and flexible applications.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "Flutter", href: "/technology/flutter" },
      ],
    },
    queTitle: {
      title: "What is Flutter?",
      description:
        "Flutter is an open-source UI framework by Google for creating natively compiled, multi-platform applications with a single codebase.",
    },
  },
  {
    slug: "android",
    href: "/technology/android",
    icon: "mage:playstore",
    label: "Android",
    description: "Develop efficient and scalable Android applications.",
    hero: {
      title: "Android Development",
      animationSequence: [
        "Build innovative and feature-rich Android applications.",
        3000,
        "Optimize your business reach with our Android app development services.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Technology", href: "/technology" },
        { label: "Android", href: "/technology/android" },
      ],
    },
    queTitle: {
      title: "What is Android?",
      description:
        "Android is an open-source mobile operating system by Google, widely used for smartphones, tablets, and other devices.",
    },
  },
];

export const designServices = [
  {
    slug: "ux-ui-design",
    href: `/design/ux-ui-design`,
    label: "UX/UI Design",
    description:
      "Create intuitive and visually appealing designs for your digital products.",
    icon: "mdi:brush",
    hero: {
      title: "UX/UI Design",
      animationSequence: [
        "We specialize in creating user-centered designs for digital products.",
        3000,
        "Our UX/UI designs are crafted to provide seamless experiences for your users.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "UX/UI Design", href: "/design/ux-ui-design" },
      ],
    },
    queTitle: {
      title: "What is UX/UI Design?",
      description:
        "UX/UI Design involves creating user-centered experiences and interfaces that ensure usability and visual appeal for digital products.",
    },
  },
  {
    slug: "brand-identity",
    href: `/design/brand-identity`,
    label: "Brand Identity",
    description:
      "Build a strong and consistent brand identity that stands out.",
    icon: "mdi:palette-swatch",
    hero: {
      title: "Brand Identity",
      animationSequence: [
        "Create a lasting impression with a strong and consistent brand identity.",
        3000,
        "Our brand identity services will help you establish a visual presence that speaks to your audience.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "Brand Identity", href: "/design/brand-identity" },
      ],
    },
    queTitle: {
      title: "What is Brand Identity?",
      description:
        "Brand identity is the visual representation of your brand. It encompasses logos, colors, fonts, and other design elements that reflect the personality and values of your brand.",
    },
  },
  {
    slug: "graphic-design",
    href: `/design/graphic-design`,
    label: "Graphic Design",
    description:
      "Deliver impactful visuals that communicate your message effectively.",
    icon: "mdi:vector-arrange-below",
    hero: {
      title: "Graphic Design",
      animationSequence: [
        "Create stunning visual designs that effectively communicate your brand message.",
        3000,
        "Our graphic design services provide impactful and memorable visuals for your brand.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "Graphic Design", href: "/design/graphic-design" },
      ],
    },
    queTitle: {
      title: "What is Graphic Design?",
      description:
        "Graphic design involves creating visuals that communicate messages, concepts, or ideas through design elements such as typography, colors, and imagery.",
    },
  },
  {
    slug: "web-design",
    href: `/design/web-design`,
    label: "Web Design",
    description:
      "Design responsive and user-friendly websites tailored to your needs.",
    icon: "mdi:web",
    hero: {
      title: "Web Design",
      animationSequence: [
        "Design websites that are not only visually appealing but also provide a seamless user experience.",
        3000,
        "Our web design services ensure your website works across all devices and screens.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "Web Design", href: "/design/web-design" },
      ],
    },
    queTitle: {
      title: "What is Web Design?",
      description:
        "Web design refers to the process of creating the layout, structure, and appearance of a website. It involves designing for usability, accessibility, and responsiveness.",
    },
  },
  {
    slug: "mobile-app-design",
    href: `/design/mobile-app-design`,
    label: "Mobile App Design",
    description:
      "Create seamless and engaging designs for mobile applications.",
    icon: "mdi:cellphone",
    hero: {
      title: "Mobile App Design",
      animationSequence: [
        "We design user-friendly and visually stunning mobile applications.",
        3000,
        "Our mobile app design services ensure that your app provides an intuitive and engaging user experience.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "Mobile App Design", href: "/design/mobile-app-design" },
      ],
    },
    queTitle: {
      title: "What is Mobile App Design?",
      description:
        "Mobile app design involves creating an intuitive and visually appealing interface and experience for mobile users.",
    },
  },
  {
    slug: "print-design",
    href: `/design/print-design`,
    label: "Print Design",
    description:
      "Design stunning brochures, flyers, and other print materials.",
    icon: "mdi:printer",
    hero: {
      title: "Print Design",
      animationSequence: [
        "We create eye-catching and professional print materials that leave a lasting impression.",
        3000,
        "Our print design services will ensure that your materials are both attractive and effective.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "Print Design", href: "/design/print-design" },
      ],
    },
    queTitle: {
      title: "What is Print Design?",
      description:
        "Print design involves creating designs for print materials such as brochures, flyers, and posters. It requires knowledge of color theory, typography, and layout principles.",
    },
  },
  {
    slug: "illustration",
    href: `/design/illustration`,
    label: "Illustration",
    description: "Craft custom illustrations to bring your ideas to life.",
    icon: "mdi:draw",
    hero: {
      title: "Illustration",
      animationSequence: [
        "We create custom illustrations that help express your unique brand identity.",
        3000,
        "Our illustration services bring creativity and personality to your visual communication.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "Illustration", href: "/design/illustration" },
      ],
    },
    queTitle: {
      title: "What is Illustration?",
      description:
        "Illustration refers to the art of creating visual representations of ideas, concepts, or stories. It can range from hand-drawn artwork to digital illustrations.",
    },
  },
  {
    slug: "motion-graphics",
    href: `/design/motion-graphics`,
    label: "Motion Graphics",
    description:
      "Create engaging animations and motion graphics for your brand.",
    icon: "mdi:animation",
    hero: {
      title: "Motion Graphics",
      animationSequence: [
        "We create visually engaging motion graphics that help communicate your brand story.",
        3000,
        "Our motion graphics services can elevate your brand's messaging and engagement.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "Motion Graphics", href: "/design/motion-graphics" },
      ],
    },
    queTitle: {
      title: "What are Motion Graphics?",
      description:
        "Motion graphics are visual elements that use animation, video, and audio to communicate a message or story. They can be used in commercials, social media, and more.",
    },
  },
  {
    slug: "3d-design",
    href: `/design/3d-design`,
    label: "3D Design",
    description:
      "Build captivating 3D designs and models for a variety of uses.",
    icon: "mdi:cube",
    hero: {
      title: "3D Design",
      animationSequence: [
        "We create detailed and visually stunning 3D designs for various applications.",
        3000,
        "Our 3D design services bring your concepts to life in ways that traditional design cannot.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Design", href: "/design" },
        { label: "3D Design", href: "/design/3d-design" },
      ],
    },
    queTitle: {
      title: "What is 3D Design?",
      description:
        "3D design involves creating three-dimensional visual representations of objects, characters, or environments, often used in product modeling, architecture, and animation.",
    },
  },
];

export const marketingServices = [
  {
    slug: "digital-marketing",
    href: `/marketing/digital-marketing`,
    label: "Digital Marketing",
    description:
      "Harness the power of online channels to drive traffic and engagement.",
    icon: "mdi:monitor",
    hero: {
      title: "Digital Marketing",
      animationSequence: [
        "We use the best digital marketing strategies to boost your brand's online presence.",
        3000,
        "Our digital marketing services help you reach and engage your target audience effectively.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        { label: "Digital Marketing", href: "/marketing/digital-marketing" },
      ],
    },
    queTitle: {
      title: "What is Digital Marketing?",
      description:
        "Digital marketing uses online platforms like social media, search engines, and websites to promote products, services, or brands and engage with the target audience.",
    },
  },
  {
    slug: "social-media-marketing",
    href: `/marketing/social-media-marketing`,
    label: "Social Media Marketing",
    description:
      "Boost your brand presence with targeted social media strategies.",
    icon: "mdi:instagram",
    hero: {
      title: "Social Media Marketing",
      animationSequence: [
        "Boost your brand presence on popular social media platforms.",
        3000,
        "We create customized strategies to engage your target audience through social media.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        {
          label: "Social Media Marketing",
          href: "/marketing/social-media-marketing",
        },
      ],
    },
    queTitle: {
      title: "What is Social Media Marketing?",
      description:
        "Social media marketing involves using platforms like Instagram, Facebook, Twitter, and LinkedIn to engage with the audience, promote products, and build a brand presence.",
    },
  },
  {
    slug: "seo-optimization",
    href: `/marketing/seo-optimization`,
    label: "SEO Optimization",
    description:
      "Enhance your website's visibility with expert search engine optimization.",
    icon: "mdi:magnify",
    hero: {
      title: "SEO Optimization",
      animationSequence: [
        "Improve your search engine rankings and visibility with our expert SEO strategies.",
        3000,
        "Our SEO services help your website rank higher and attract more organic traffic.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        { label: "SEO Optimization", href: "/marketing/seo-optimization" },
      ],
    },
    queTitle: {
      title: "What is SEO Optimization?",
      description:
        "SEO (Search Engine Optimization) optimization involves improving the visibility of a website on search engines like Google, to increase organic traffic and drive more business.",
    },
  },
  {
    slug: "email-marketing",
    href: `/marketing/email-marketing`,
    label: "Email Marketing",
    description:
      "Create impactful email campaigns to connect with your audience.",
    icon: "mdi:email-outline",
    hero: {
      title: "Email Marketing",
      animationSequence: [
        "Connect with your audience through personalized and impactful email campaigns.",
        3000,
        "We craft engaging email marketing campaigns that drive action and increase conversions.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        { label: "Email Marketing", href: "/marketing/email-marketing" },
      ],
    },
    queTitle: {
      title: "What is Email Marketing?",
      description:
        "Email marketing involves sending targeted messages to a group of recipients via email to promote products, services, or build relationships with potential customers.",
    },
  },
  {
    slug: "content-marketing",
    href: `/marketing/content-marketing`,
    label: "Content Marketing",
    description:
      "Develop engaging content that resonates with your target audience.",
    icon: "mdi:script-text-outline",
    hero: {
      title: "Content Marketing",
      animationSequence: [
        "Create content that not only attracts but also engages your target audience.",
        3000,
        "We provide content marketing strategies that resonate with your customers and drive conversions.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        { label: "Content Marketing", href: "/marketing/content-marketing" },
      ],
    },
    queTitle: {
      title: "What is Content Marketing?",
      description:
        "Content marketing involves creating and distributing valuable content that attracts and engages a target audience, ultimately driving profitable customer action.",
    },
  },
  {
    slug: "influencer-marketing",
    href: `/marketing/influencer-marketing`,
    label: "Influencer Marketing",
    description:
      "Leverage influencers to amplify your brand's message and reach.",
    icon: "mdi:account-star",
    hero: {
      title: "Influencer Marketing",
      animationSequence: [
        "Partner with influencers to enhance your brand's reach and credibility.",
        3000,
        "We connect brands with influencers who share your values and can amplify your marketing efforts.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        {
          label: "Influencer Marketing",
          href: "/marketing/influencer-marketing",
        },
      ],
    },
    queTitle: {
      title: "What is Influencer Marketing?",
      description:
        "Influencer marketing involves working with influencers who have a large following on social media or other platforms to promote your products and services.",
    },
  },
  {
    slug: "ppc-advertising",
    href: `/marketing/ppc-advertising`,
    label: "Pay-Per-Click Advertising",
    description:
      "Drive immediate traffic and leads with strategic PPC campaigns.",
    icon: "mdi:cash-multiple",
    hero: {
      title: "Pay-Per-Click Advertising",
      animationSequence: [
        "Generate immediate traffic and leads with targeted PPC advertising campaigns.",
        3000,
        "We create PPC campaigns that target the right audience and drive measurable results.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        { label: "PPC Advertising", href: "/marketing/ppc-advertising" },
      ],
    },
    queTitle: {
      title: "What is PPC Advertising?",
      description:
        "PPC (Pay-Per-Click) advertising is a model where advertisers pay each time a user clicks on their ad. It’s used to drive immediate traffic to websites and generate leads.",
    },
  },
  {
    slug: "video-marketing",
    href: `/marketing/video-marketing`,
    label: "Video Marketing",
    description:
      "Engage your audience with compelling video content and storytelling.",
    icon: "mdi:video",
    hero: {
      title: "Video Marketing",
      animationSequence: [
        "Create impactful video content that resonates with your target audience.",
        3000,
        "Our video marketing strategies help you engage and connect with your audience on a deeper level.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        { label: "Video Marketing", href: "/marketing/video-marketing" },
      ],
    },
    queTitle: {
      title: "What is Video Marketing?",
      description:
        "Video marketing involves using video content to promote products, services, or brand stories to engage an audience and build brand awareness.",
    },
  },
  {
    slug: "analytics-reporting",
    href: `/marketing/analytics-reporting`,
    label: "Analytics & Reporting",
    description:
      "Track and analyze marketing performance to optimize your strategy.",
    icon: "mdi:chart-bar",
    hero: {
      title: "Analytics & Reporting",
      animationSequence: [
        "Track your marketing performance and optimize your strategies with data-driven insights.",
        3000,
        "Our analytics and reporting services help you understand your campaign performance and improve results.",
        3000,
      ],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Marketing", href: "/marketing" },
        {
          label: "Analytics & Reporting",
          href: "/marketing/analytics-reporting",
        },
      ],
    },
    queTitle: {
      title: "What is Analytics & Reporting?",
      description:
        "Analytics and reporting help businesses track, measure, and evaluate the performance of marketing campaigns to optimize strategies and improve outcomes.",
    },
  },
];
