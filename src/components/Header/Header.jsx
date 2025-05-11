"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import { ROUTE } from "@/routes/routes";
import { Icon } from "@iconify/react";
import InfoMarquee from "../InfoMarquee/InfoMarquee";
import { usePathname } from "next/navigation";

const Header = () => {
  const [openCompanyMenu, setOpenCompanyMenu] = useState(false);
  const [openServicesMenu, setOpenServicesMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const path = usePathname();

  const aboutPath = "/about-us";

  const megaMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  let timeoutId;

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY <= 200);
      setIsAtTop(currentScrollY <= 20);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpenCompanyMenu(false);
      setOpenServicesMenu(false);
    }, 200);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutId);
    if (menu === "company") {
      setOpenCompanyMenu(true);
      setOpenServicesMenu(false); // Close other menu
    } else if (menu === "services") {
      setOpenServicesMenu(true);
      setOpenCompanyMenu(false); // Close other menu
    }
  };

  useEffect(() => {
    if ((openCompanyMenu || openServicesMenu) && megaMenuRef.current) {
      gsap.fromTo(
        megaMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }
      );
    }
  }, [openCompanyMenu, openServicesMenu]);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.in",
        opacity: 1,
        visibility: "visible",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.7,
        ease: "power1.in",
        opacity: 0,
        visibility: "hidden",
      });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        id="header"
        className={`   top-0 left-0 right-0 z-50 transition-transform duration-300  ${
          isAtTop && path !== aboutPath
            ? "bg-black text-white relative"
            : "bg-white text-black sticky translate-y-0"
        }
        ${isScrollingUp ? " shadow-md " : "-translate-y-full "}`}
      >
        <InfoMarquee />
        <div className="relative">
          <div className="container flex items-center justify-between py-5 relative">
            {/* Logo */}
            <Link href={ROUTE.home} className="hover:text-primary">
              {aboutPath && (
                <Image
                  src="/assets/logo/logo-black.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  // className=""
                  className={`w-auto max-w-24 ${
                    isAtTop && path !== aboutPath ? "invert" : ""
                  }`}
                />
              )}
              {!aboutPath && (
                <Image
                  src="/assets/logo/logo-black.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  // className=""
                  className={`w-auto max-w-24 ${isAtTop ? "invert" : ""}`}
                />
              )}
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 font-medium">
              {/* <Link href={ROUTE.home} className="hover:text-primary">
                Home
              </Link> */}

              {/* Company Mega Menu */}
              <div
                onMouseEnter={() => handleMouseEnter("company")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center hover:text-primary">
                  Company
                </button>
                {openCompanyMenu && (
                  <div
                    ref={megaMenuRef}
                    className="absolute bg-white gap-4 grid grid-cols-2 justify-center right-0 mt-4 p-6 shadow-lg text-black max-w-4xl"
                  >
                    <div className="bg-blue-100 p-4 rounded shadow-sm">
                      <h3 className="font-bold mb-3">About Us</h3>
                      <p className="text-sm mb-4 text-gray-600">
                        Learn more about our journey, values, and vision for the
                        future.
                      </p>
                      <Link
                        href={ROUTE.about}
                        className="flex items-center px-4 py-2 bg-blue-200 rounded hover:bg-blue-300"
                      >
                        <span> Learn More </span>{" "}
                        <Icon icon="ep:right" className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="bg-green-100 p-4 rounded shadow-sm">
                      <h3 className="font-bold mb-3">Careers</h3>
                      <p className="text-sm mb-4 text-gray-600">
                        Explore exciting career opportunities and become part of
                        our growing team.
                      </p>
                      <Link
                        href={ROUTE.career}
                        className="flex items-center px-4 py-2 bg-green-200 rounded hover:bg-green-300"
                      >
                        <span> Learn More </span>{" "}
                        <Icon icon="ep:right" className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Mega Menu */}
              <div
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center hover:text-primary">
                  Services
                </button>
                {openServicesMenu && (
                  <div
                    ref={megaMenuRef}
                    className="absolute left-0 right-0 mt-4 bg-white text-black rounded-md shadow-lg w-full p-6 grid grid-cols-3 gap-4"
                  >
                    <div className="bg-purple-100 p-4 rounded shadow-sm">
                      <h3 className="font-bold text-lg mb-2">Designing</h3>
                      <p className="text-sm mb-4 text-gray-600">
                        Build robust and scalable websites tailored to your
                        business needs.
                      </p>
                      <Link
                        href={ROUTE.design.root}
                        className="flex items-center px-4 py-2 bg-purple-200 rounded hover:bg-purple-300"
                      >
                        <span> Learn More </span>{" "}
                        <Icon icon="ep:right" className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded shadow-sm">
                      <h3 className="font-bold text-lg mb-2">Development</h3>
                      <p className="text-sm mb-4 text-gray-600">
                        Create seamless mobile applications for iOS and Android
                        using modern frameworks.
                      </p>
                      <Link
                        href={ROUTE.technology.root}
                        className="flex items-center px-4 py-2 bg-yellow-200 rounded hover:bg-yellow-300"
                      >
                        <span> Learn More </span>{" "}
                        <Icon icon="ep:right" className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="bg-red-100 p-4 rounded shadow-sm">
                      <h3 className="font-bold text-lg mb-2">Marketing</h3>
                      <p className="text-sm mb-4 text-gray-600">
                        Design and develop WordPress websites that stand out and
                        perform.
                      </p>
                      <Link
                        href={ROUTE.marketing.root}
                        className="flex items-center px-4 py-2 bg-red-200 rounded hover:bg-red-300"
                      >
                        <span> Learn More </span>{" "}
                        <Icon icon="ep:right" className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href={ROUTE.work.root} className="hover:text-primary">
                Work
              </Link>
              <Link href={ROUTE.blog.root} className="hover:text-primary">
                Knowledge
              </Link>
              {/* <Link href={ROUTE.client.root} className="hover:text-primary">
                Client
              </Link> */}

              <Link
                href={ROUTE.contact}
                className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex md:hidden">
              <button
                className="text-2xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className={`md:hidden bg-white text-black shadow-lg absolute top-0 right-0 min-h-screen w-[70%] transition-transform transform ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-20`}
          >
            <div className="flex justify-end p-4">
              <button
                className="text-2xl text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                ×
              </button>
            </div>
            <Link href="/" className="block px-4 py-2">
              Home
            </Link>
            <div className="relative">
              <button
                className="block px-4 py-2 w-full text-left"
                onClick={() => setOpenCompanyMenu(!openCompanyMenu)}
              >
                Company
              </button>
              {openCompanyMenu && (
                <div className="bg-blue-100 p-4 rounded shadow-sm">
                  <Link
                    href={ROUTE.about}
                    className="block px-4 py-2 bg-blue-200 rounded hover:bg-blue-300"
                  >
                    About Us
                  </Link>
                  <Link
                    href={ROUTE.career}
                    className="block px-4 py-2 bg-green-200 rounded hover:bg-green-300"
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="block px-4 py-2 w-full text-left"
                onClick={() => setOpenServicesMenu(!openServicesMenu)}
              >
                Services
              </button>
              {openServicesMenu && (
                <div className="bg-purple-100 p-4 rounded shadow-sm">
                  <Link
                    href={ROUTE.design.root}
                    className="block px-4 py-2 bg-purple-200 rounded hover:bg-purple-300"
                  >
                    Designing
                  </Link>
                  <Link
                    href={ROUTE.technology.root}
                    className="block px-4 py-2 bg-yellow-200 rounded hover:bg-yellow-300"
                  >
                    Development
                  </Link>
                  <Link
                    href={ROUTE.marketing.root}
                    className="block px-4 py-2 bg-red-200 rounded hover:bg-red-300"
                  >
                    Marketing
                  </Link>
                </div>
              )}
            </div>
            <Link
              href={ROUTE.work.root}
              className="block px-4 py-2 hover:text-primary"
            >
              Work
            </Link>
            <Link
              href={ROUTE.blog.root}
              className="block px-4 py-2 hover:text-primary"
            >
              Knowledge
            </Link>
            {/* <Link
              href={ROUTE.client.root}
              className="block px-4 py-2 hover:text-primary"
            >
              Client
            </Link> */}

            <Link
              href={ROUTE.contact}
              className="block px-4 py-2 hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        )}

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </header>
    </>
  );
};

export default Header;
