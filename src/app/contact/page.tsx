/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import TopContent from "@/components/TopContent";
import BottomContent from "@/components/BottomContent";

const Contact = ({
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
      className={`h-full w-full bg-[#000] 
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

      <Footer />
    </div>
  );
};

export default Contact;
