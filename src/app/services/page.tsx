/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import HeaderService from "@/components/HeaderService";
import TopContent from "@/components/TopContent";

const Service = ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.id);

  return (
    <div
      className={`h-full w-full bg-[#fff] 
    `}
    >
      <div
        className={`mx-auto ${isMobileOrTablet ? "py-0" : "py-8"} ${
          isMobileOrTablet ? "w-full" : "w-4/5"
        }`}
      >
        <Navigation
          bgColor={`${isMobileOrTablet ? "bg-white" : "bg-[#FAB005]"}`}
        />
      </div>

      <div className={`${isMobileOrTablet ? "px-6" : "px-32"} mt-4 `}>
        <p
          className={` font-normal text-black mb-10 ${
            isMobileOrTablet
              ? "justify-start items-start text-left text-1xl"
              : "items-center justify-center text-center text-5xl"
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
        href={"/"}
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
