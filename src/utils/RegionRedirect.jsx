"use client";
import { siteIn, siteUrl } from "@/config/siteConfig";
import { useEffect } from "react";

const RegionRedirect = () => {
  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const countryCode = data.country_code;
        const currentHostname = window.location.hostname;

        if (countryCode === "IN" && currentHostname === siteUrl) {
          window.location.href = siteIn;
        }
      } catch (error) {
        console.error("Error fetching geolocation:", error);
      }
    };

    fetchGeoLocation();
  }, []);

  return null;
};

export default RegionRedirect;
