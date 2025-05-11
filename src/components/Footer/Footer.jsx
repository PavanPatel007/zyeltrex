"use client";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { ausSite, siteInfo, socialLinks } from "@/config/siteConfig";
import Link from "next/link";
import { ROUTE } from "@/routes/routes";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-16  ">
      {/* Top Section */}
      <div className="container hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h3 className="text-4xl sm:text-5xl lg:text-[65px] leading-tight">
              We’d love to
              <br />
              <TypeAnimation
                sequence={["talk", 2000, "build", 2000, "partner up", 2000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="block"
              />
            </h3>
          </div>
          <div className="lg:col-span-7">
            <div className="flex items-start">
              <Icon
                icon="fa-regular:hand-point-right"
                className="text-6xl mr-4"
              />
              <p className="text-lg sm:text-xl">
                Looking for Services? Send an email to{" "}
                <Link
                  href={`mailto:${siteInfo.email.info}`}
                  className="underline hover:underline"
                >
                  {siteInfo.email.info}
                </Link>{" "}
                for inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-3">
            <Image
              src="/assets/logo/logosingle.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-auto invert max-w-44"
            />
          </div>

          {/* Services Section */}
          <div className="lg:col-span-3">
            <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={ROUTE.services.webDevelopment}
                  className="hover:underline"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTE.services.appDevelopment}
                  className="hover:underline"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTE.services.aiMlDevelopment}
                  className="hover:underline"
                >
                  AI & ML Development
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:underline">
                  IT Consulting Services
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3">
            <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={ROUTE.about} className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={ROUTE.contact} className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={ROUTE.blog.root} className="hover:underline">
                  Knowledge
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Head Office
            </h2>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 uppercase">
              {siteInfo.country}
            </h4>
            <p>{siteInfo.address}</p>
            <p className="mt-2">{siteInfo.phone}</p>
            <p>{siteInfo.email.info}</p>
            {/* 
            <h4 className="text-xl sm:text-2xl font-semibold mt-6">
              {siteInfo.country}
            </h4>
            <p>{siteInfo.address}</p>
            <p className="mt-2">{siteInfo.phone}</p>
            <p>{siteInfo.email.info}</p> */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white py-4 border-t border-x-gray-100">
        <div className="container flex flex-col sm:flex-row justify-center items-center">
          <div className="flex items-center space-x-4">
            <p className="text-sm sm:text-base">
              &copy; {new Date().getFullYear()} Zyeltrex. All rights reserved.
            </p>
          </div>

          <div className=" hidden space-x-6 mt-4 sm:mt-0">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Icon icon="akar-icons:facebook-fill" className="text-2xl" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Icon icon="akar-icons:twitter-fill" className="text-2xl" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Icon icon="akar-icons:instagram-fill" className="text-2xl" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Icon icon="akar-icons:linkedin-box-fill" className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
