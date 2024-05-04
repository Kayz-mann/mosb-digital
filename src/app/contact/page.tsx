/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import ContactLine from "@/components/ContactLine";
import ListWithButton, { jobData } from "@/components/module/ListWithButton";
import useScroll from "../hooks/useScroll";

const Contact = ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const isScrolled = useScroll();
  const isTablet = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.id);

  return (
    <div
      className={`h-full w-full ${
        isMobileOrTablet ? "bg-[#fff] " : "bg-[#000] "
      }
    `}
    >
      <div
        className={`ease-in-out transition-padding duration-500 pb-20 ${
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

      <div className={`${isMobileOrTablet ? "px-4" : "px-10"}`}>
        <ContactLine
          country={"Atlanta"}
          firstTitle={"Find Us"}
          secondTitle="Contact"
          phoneAddress={"Email: Info@mosbdigital.com\nTel: (1) 404-551-7978"}
          address={"30 Satelite Blvd\nDurluth, GA. 30096"}
        />

        <div
          className={`flex flex-row justify-between  border-b-2 ${
            isMobileOrTablet ? "border-black mt-10 mb-10" : "border-white mt-10"
          } `}
        />

        <div className={`${isMobileOrTablet ? " mb-10" : ""}`}>
          <ContactLine
            country={"Lagos"}
            firstTitle={"Find Us"}
            secondTitle="Contact"
            phoneAddress={"Email: Info@mosbdigital.com\nTel: +234 810 9333 263"}
            address={"75b Ogunnusi Rd,\nIsheri 101233"}
          />
        </div>
      </div>

      <div className="w-full bg-[#D9D9D9] h-screen/2 py-4 px-10">
        <h2
          className={`text-center ${
            isMobileOrTablet ? "text-xl" : "text-4xl"
          } font-normal`}
        >
          Our door is always open for creative
          <br />
          minds to join our team.
        </h2>

        <div className="mt-10">
          {jobData.map((item, index) => (
            <ListWithButton key={index} label={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
