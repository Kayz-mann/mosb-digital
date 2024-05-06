/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import TopContent from "@/components/TopContent";
import BottomContent from "@/components/BottomContent";
import useScroll from "../hooks/useScroll";

const About = ({
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
      className={`h-full w-full bg-[#D9D9D9] 
    `}
    >
      {/* //${isMobileOrTablet ? "py-0" : "py-8"} */}
      {/* <div className={`mx-auto  ${isMobileOrTablet ? "w-full" : "w-4/5"}`}>
        <Navigation
          bgColor={`${isMobileOrTablet ? "bg-white" : "bg-[#FAB005]"}`}
        />
      </div> */}

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

      <div className="pt-16">
        <BottomContent
          bgColor="bg-[#D9D9D9] "
          staticText="Our style goes beyond pretty words; we create content that evokes  "
          alternateWords={["emotion.", "clicks.", "sales."]}
        />
      </div>

      {/* <div className={`${isMobileOrTablet ? "px-6" : "px-32"} mt-4 `}>
  
      </div> */}
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        className="items-center justify-center"
      >
        <TopContent
          px="px-44"
          bgColor="bg-black"
          color="text-white"
          noButton
          href={"/"}
          width={isMobileOrTablet ? "100%" : "80%"}
          leftContent={`Adaptability, 
        Individuality\n 
        & Imagination.`}
          rightContent="We are forward-thinking people
        who are committed to staying
        ahead of the curve."
        />

        <TopContent
          px="px-44"
          bgColor="bg-[#D9D9D9]"
          color="text-black"
          noButton
          href={"/"}
          width={isMobileOrTablet ? "100%" : "80%"}
          leftContent={`We Thrive
          on Collaboration.`}
          rightContent="We thrive on collaboration. We genuinely believe 
          that no one person knows it all, and bringing diverse
          minds together makes great things happen. 
          This is a fundamental principle of Mosb Digital. 
          We bring the best minds together to create contents 
          that move businesses, people, and the world forward."
        />

        <TopContent
          px="px-44"
          bgColor="bg-black"
          color="text-white"
          noButton
          href={"/"}
          width={isMobileOrTablet ? "100%" : "80%"}
          leftContent={`Our Approach`}
          rightContent="We aspire not only to create what captures people's eyes 
          but also what resonates with their emotions, thoughts, 
          memories, and actions. Our team extends content creation 
          beyond mere words, aesthetics, and layouts—aiming to 
          exceed and redefine customer expectations through tangible 
          strategies that inspire transformative shifts."
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
