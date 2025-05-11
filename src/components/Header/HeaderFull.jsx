"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ROUTE } from "@/routes/routes";
import { siteInfo } from "@/config/siteConfig";
import { usePathname } from "next/navigation";

// Menu Structure with Routes
const menuData = [
  { title: "Home", path: ROUTE.home },
  { title: "About us ", path: ROUTE.about },
  {
    title: "Our Services",
    path: "/services",
    submenu: [
      { title: "Web Development", path: ROUTE.services.webDevelopment },
      { title: "Mobile App Development", path: ROUTE.services.appDevelopment },
      { title: "AI & ML Development", path: ROUTE.services.aiMlDevelopment },
      // { title: "IT Consulting Services", path: "#" },
    ],
  },
  // { title: "Portfolio", path: ROUTE.work.root },
  // { title: "Clients", path: ROUTE.client.root },
  { title: "Knowledge", path: ROUTE.blog.root },
  // { title: "Careers", path: ROUTE.career },
  { title: "Contact Us", path: ROUTE.contact },
];

const HeaderFull = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [scrollingDown, setScrollingDown] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const path = usePathname();

  const home = ROUTE.home === "/";

  const paths = [];

  const isPageActive = paths.some((p) => path.startsWith(p));

  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // if (currentScroll <= 20) {
      setIsAtTop(currentScroll <= 20);
      // }
      if (currentScroll > 200) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }

      if (currentScroll > lastScrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(".menu-full", { duration: 0.5, x: 0, opacity: 1 });
      gsap.fromTo(
        ".menu-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power3.out" }
      );
      gsap.fromTo(
        ".contact-info",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(".menu-item, .contact-info", {
        opacity: 0,
        y: 10,
        duration: 0.3,
      });
      gsap.to(".menu-full", {
        duration: 0.5,
        x: "-100%",
        opacity: 0,
        delay: 0.8,
      });
    }
  }, [isMenuOpen]);

  const openSubMenu = (menu) => {
    gsap.to(".menu-items", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setActiveMenu(menu);
        gsap.fromTo(
          ".submenu-items",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power3.out" }
        );
        gsap.fromTo(
          ".menu-item",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power3.out" }
        );
      },
    });
  };

  const goBackToMainMenu = () => {
    gsap.to(`.submenu-item`, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      stagger: 0.1,
      onComplete: () => {
        setActiveMenu("main");
        gsap.fromTo(
          ".menu-item",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power3.out" }
        );
      },
    });
  };

  return (
    <div>
      {/* Header */}
      <header
        className={`${
          isPageActive && isAtTop ? "sticky" : "fixed"
        } top-0 left-0 right-0 z-40 py-4 px-6 md:px-20 transition-all duration-300 ease-in-out ${
          headerBg || isPageActive ? "bg-black" : "bg-transparent"
        } ${scrollingDown ? "translate-y-[-100%]" : "translate-y-0 "} ${
          isAtTop || (!isAtTop && !scrollingDown) ? " " : "shadow-xl "
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo/logosingle.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-auto max-w-10 md:max-w-10 invert cursor-pointer"
              />
              <span className="text-white ml-2 text-2xl font-bold">
                {" "}
                Zyeltrex{" "}
              </span>
            </Link>
          </div>

          <div
            className="menu-icon cursor-pointer flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div>
              <span className="block w-6 h-0.5 bg-white mb-2"></span>
              <span className="block w-6 h-0.5 bg-white mb-2"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
            <span className="text-sm ml-3 text-white hidden md:block">
              Menu
            </span>
          </div>
        </div>
      </header>

      {/* Full Page Menu */}
      <div
        className="menu-full fixed top-0 left-0 w-full h-full bg-black text-white z-50"
        style={{
          transform: "translateX(-100%)",
          backgroundImage:
            "linear-gradient(80deg, var(--primary) 1%, #000 30%)",
        }}
      >
        <div className="flex justify-between items-center p-6 px-6 md:px-20">
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/logo/logosingle.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-auto max-w-10 invert md:max-w-10 cursor-pointer"
              />
            </Link>
          </div>
          <div
            className="close-icon cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-xl">X</span>
            <span className="ml-2">Close</span>
          </div>
        </div>

        <div className="container pt-10 md:pt-20 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-7">
              {/* Left Side: Menu Items */}
              <div>
                {activeMenu === "main" && (
                  <div className="menu-items flex flex-col">
                    {menuData.map((item, index) =>
                      item.submenu ? (
                        <div
                          key={item.title}
                          className="menu-item text-2xl md:text-3xl mb-4 font-semibold cursor-pointer flex items-center"
                          onClick={() => openSubMenu(item.title)}
                        >
                          <span className="text-base md:text-lg text-gray-400 mr-3">
                            {String(index + 1).padStart(2, "0")} .
                          </span>
                          {`${item.title} >`}
                        </div>
                      ) : (
                        <Link key={item.title} href={item.path}>
                          <div className="menu-item text-2xl md:text-3xl font-semibold mb-4 cursor-pointer flex items-center">
                            <span className="text-base md:text-lg text-gray-400 mr-3">
                              {String(index + 1).padStart(2, "0")} .
                            </span>
                            {item.title}
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                )}

                {/* Dynamic Submenu Rendering */}
                {menuData
                  .filter((item) => item.submenu)
                  .map(
                    (item) =>
                      activeMenu === item.title && (
                        <div
                          key={item.title}
                          className="submenu-items flex flex-col"
                        >
                          <div
                            className="text-lg font-bold mb-4 cursor-pointer"
                            onClick={goBackToMainMenu}
                          >
                            ← &nbsp; Back
                          </div>
                          {item.submenu.map((subItem, subIndex) => (
                            <Link key={subItem.title} href={subItem.path}>
                              <div className="submenu-item text-2xl md:text-3xl font-semibold mb-4 cursor-pointer flex items-center">
                                <span className="text-base md:text-lg text-gray-400 mr-3">
                                  {String(subIndex + 1).padStart(2, "0")} .
                                </span>
                                {subItem.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )
                  )}
              </div>
            </div>

            {/* Right Side: Contact Information */}
            <div className="md:col-span-5 md:border-l border-gray-400">
              <div className="contact-info text-base md:text-lg leading-8 md:pl-10">
                <p className="text-gray-400 uppercase mb-2">Phone:</p>
                <p>{siteInfo.phone}</p>

                <p className="text-gray-400 uppercase mt-6 mb-2">Address:</p>
                <p>{siteInfo.address}</p>
                <p className="text-gray-400 uppercase mb-2 mt-6">Email:</p>
                <p>{siteInfo.email.info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFull;
