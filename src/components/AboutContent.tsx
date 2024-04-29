/* eslint-disable react/no-unescaped-entities */
"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React from "react";
import CustomButton from "./module/CustomButton";
import aboutImage from "../../public/assets/images/about.png";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const AboutContent = () => {
  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallScreen = useMobileOrTablet(500);
  const isSmallerPhone = useMobileOrTablet(468);
  return (
    <div
      className={`bg-white h-screen/2 justify-between w-full flex pb-10 pt-10 ${
        isMobileOrTablet ? "px-6 flex-col" : "px-40"
      }`}
    >
      <div style={{ flex: 0.48 }}>
        <p
          style={{ fontSize: isSmallScreen ? "14px" : "24px" }}
          className={`text-24 font-bold text-gray-500 uppercase`}
        >
          what we're about
        </p>
        <p
          style={{ fontSize: isSmallScreen ? "20px" : "32px" }}
          className="text-32 font-bold text-black italic"
        >
          Powered by Technology
        </p>
        <p
          style={{
            fontSize: isSmallScreen ? "20px" : "32px",
            marginTop: "-5px",
          }}
          className="text-32 font-bold text-[#FA0505] italic"
        >
          Guided By Strategy
        </p>
        <p
          style={{
            fontSize: isSmallScreen ? "20px" : "32px",
            marginTop: "-5px",
          }}
          className="text-32 font-bold text-[#1E07AA] italic"
        >
          Inspired by Data.
        </p>

        <p
          style={{
            fontSize: 14,
            fontWeight: "400",
            marginTop: isSmallScreen ? 10 : 0,
          }}
          className="italic"
        >
          Mosb Digital is an agency specializing in content management. We house
          top-tier managers, writers, designers, researchers, and analysts,
          fostering a collective powerhouse of expertise, innovation, and
          creativity. From the inception of your business dreams, through the
          design phase, to its launch, and the continuous management and
          enhancement of your brand in digital spaces, we accompany you every
          step of the way through strategic content management.
        </p>

        {!isMobileOrTablet && (
          <div
            style={{ marginTop: "40px", gap: 8 }}
            className={`flex ${
              isMobileOrTablet && "items-center w-full justify-center mb-24"
            }  `}
          >
            <CustomButton
              buttonText1="Learn More"
              buttonText2="Learn More"
              borderColor="border-black"
            />
            <CustomButton
              bgColor={"bg-[#fff]"}
              bgColorHover={"hover:bg-[#FA0505]"}
              textColor={"text-black"}
              textColorHover={"hover:text-white"}
              buttonText1="Our Services"
              buttonText2="Our Services"
              borderColor="border-red-500" // Change the border color to red
            />
          </div>
        )}

        {isMobileOrTablet && (
          <div
            style={{
              marginTop: isMobileOrTablet ? 15 : 0,
              alignItems: "left",
              justifyContent: "flex-start",
              flex: 1.0,
              marginBottom: "30px",
              // width: "80%",
            }}
          >
            <Link href={"/about"}>
              <button
                className={`bg-black ${
                  isSmallerPhone
                    ? "px-1 py-2 rounded-0"
                    : isMobileOrTablet
                    ? "px-2 py-2 rounded-0"
                    : "px-4 py-3"
                } flex justify-between text-white items-center rounded-md`}
              >
                <p
                  style={{
                    fontSize: isSmallerPhone ? "8px" : "14px",
                    paddingLeft: "4px",
                  }}
                  className={`mr-4 `}
                >
                  FIND OUT MORE
                </p>
                <ArrowRightIcon height={15} />
              </button>
            </Link>
          </div>
        )}
      </div>

      <div style={{ flex: 0.49 }}>
        <Image
          alt="mosb-about"
          src={aboutImage}
          style={{ height: "100%", width: "100%" }}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default AboutContent;
