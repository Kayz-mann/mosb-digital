/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import HeaderService from "@/components/HeaderService";
import TopContent from "@/components/TopContent";
import useScroll from "../hooks/useScroll";

const Service = ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const isScrolled = useScroll();
  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.id);

  return (
    <div
      className={`h-full w-full bg-gray-300 
    `}
    >
      <div
        className={`ease-in-out transition-padding duration-500 ${
          isScrolled ? "py-14" : "py-0"
        } ${isMobileOrTablet ? "w-full" : "w-4/5"}`}
        style={{
          scrollBehavior: "smooth", // Enable smooth scrolling behavior
        }}
      >
        <span
          className={`fixed left-1/2 transform -translate-x-1/2 z-50 ${
            isScrolled ? "w-[80%]" : "w-full"
          } transition-width duration-500`}
        >
          <Navigation
            isScrolled={isScrolled}
            bgColor={`${isMobileOrTablet ? "bg-white" : "bg-[#FAB005]"}`}
          />
        </span>
      </div>

      <div className={`${isMobileOrTablet ? "px-6" : "px-32"} `}>
        <p
          style={{ lineHeight: 1.2 }}
          className={` font-normal text-black mb-10 ${
            isMobileOrTablet
              ? "justify-start items-start text-left text-1xl"
              : "items-center justify-center text-left text-3xl px-8"
          }`}
        >
          We’re team of smart minds and imaginative creators dedicated to
          building a bold brand for entrepreneurs through content management.
          Our squad consists of managers, designers, writers, researchers,
          analysts and digital marketers. Whether working collaboratively or
          independently, the aim is to craft, market & manage a spectacular
          brand.
        </p>
      </div>
      <HeaderService />
      <TopContent
        px="px-44"
        buttonText="ABOUT US"
        href={"/about"}
        width={isMobileOrTablet ? "100%" : "65%"}
        leftContent="We collaborate with the best
minds to bring you the
best results."
        rightContent="Our style goes beyond pretty words; we create content that evokes emotion."
      />

      <Footer />
    </div>
  );
};

export default Service;
