/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Divider from "@mui/material/Divider";

import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import ServicePill from "./module/ServicePill";
import Link from "next/link";

const HeaderService = () => {
  const ourServices = `Our Services`;
  const isMobileOrTablet = useMobileOrTablet(1204);
  const isMdScreen = useMobileOrTablet(1024);
  const isSmallScreen = useMobileOrTablet(420);

  const serviceData = [
    "Social Media Branding and Management",
    "Online Reputation Management",
    "Insight, foresight & trends",
    "Graphics & Motion Design",
    "Project Management",
    "Content Management",
    "Virtual Assistant",
    "Web Development",
    "Copywriting",
  ];

  return (
    <div
      className={`bg-black h-1/2 flex flex-col  justify-center py-10 ${
        isMobileOrTablet ? "px-70 items-center" : "px-40"
      }`}
    >
      <p className="text-white text-2xl">{ourServices}</p>

      <div
        className={`${
          isMobileOrTablet ? "mt-2" : "mt-5"
        } flex flex-wrap justify-center w-full`}
      >
        {serviceData.map((label, index) => (
          <div
            key={index}
            className={`${isMobileOrTablet ? "w-full" : "w-1/3"} px-4  `}
          >
            <ServicePill label={label} />
          </div>
        ))}
      </div>

      <div
        className="w-full flex justify-center items-center"
        style={{
          // flexDirection: "column",
          gap: 16,
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: isMobileOrTablet ? "center" : "flex-end",
          width: "100%",
        }}
      >
        {/* {isMobileOrTablet && (
          <div>
            <Link href="/services">
              <div className="mt-8 px-2 py-1 bg-white rounded-full items-center justify-center cursor-pointer">
                <p
                  style={{ fontSize: "10px", marginLeft: "12px" }}
                  className="text-black"
                >
                  See More
                </p>
              </div>
            </Link>

            <div className="mt-8 px-2 py-1 bg-white rounded-full items-center justify-center cursor-pointer">
              <div className="flex items-center">
                <p style={{ fontSize: "10px" }} className="text-black">
                  Work with us
                </p>
                <ArrowRightIcon height={12} />
              </div>
            </div>
          </div>
        )} */}
        <div
          className={`${
            isMobileOrTablet ? "flex flex-col items-center" : "flex gap-12"
          }`}
        >
          <div
            style={{
              marginTop: isMobileOrTablet ? 34 : 0,
              textAlign: "left",
              justifyContent: "flex-start",
            }}
          >
            <p
              className="text-white mb-2"
              style={{ fontSize: isMobileOrTablet ? "18px" : "18px" }}
            >
              Got a project?
            </p>
            <button
              className={`bg-white ${
                isMdScreen
                  ? "px-4 py-1"
                  : isMobileOrTablet
                  ? "px-4 py-1"
                  : "px-4 py-2"
              } flex justify-between text-black items-center rounded-md hover:border hover:border-white hover:bg-black hover:text-white`}
              style={{ fontSize: isMobileOrTablet ? "14px" : "14px" }}
            >
              <p className={`mr-2`}>Let's Talk</p>
              <ArrowRightIcon height={15} />
            </button>
          </div>

          <div
            style={{
              marginTop: isMobileOrTablet ? 34 : 0,
              textAlign: "left",
              justifyContent: "flex-start",
            }}
          >
            <p
              className="text-white mb-2"
              style={{ fontSize: isMobileOrTablet ? "18px" : "18px" }}
            >
              Work with us
            </p>
            <Link href={"/services"}>
              <button
                className={`bg-white ${
                  isMdScreen
                    ? "px-4 py-1"
                    : isMobileOrTablet
                    ? "px-4 py-1"
                    : "px-4 py-2"
                } flex justify-between text-black items-center rounded-md hover:border hover:border-white hover:bg-black hover:text-white`}
                style={{ fontSize: isMobileOrTablet ? "14px" : "14px" }}
              >
                <p className={`mr-2`}>Let's Talk</p>
                <ArrowRightIcon height={15} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
