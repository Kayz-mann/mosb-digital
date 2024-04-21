"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import ServicePill from "./module/ServicePill";

const HeaderService = () => {
  const ourServices = `Our Services`;
  const isMobileOrTablet = useMobileOrTablet(1204);
  const isMdScreen = useMobileOrTablet(1024);
  const isSmallScreen = useMobileOrTablet(420);

  const serviceData = [
    "Social branding and Management",
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
          isMobileOrTablet ? "mt-5" : "mt-10"
        } flex flex-wrap justify-center w-full`}
      >
        {serviceData.map((label, index) => (
          <div
            key={index}
            className={`${isMobileOrTablet ? "w-full" : "w-1/3"} px-2 py-2`}
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
        {isMobileOrTablet && (
          <div className="mt-8 px-2 py-2 bg-white rounded-full items-center justify-center cursor-pointer">
            <p className="text-black">See More</p>
          </div>
        )}
        {!isMobileOrTablet && (
          <>
            <div
              style={{
                marginTop: isMobileOrTablet ? 34 : 0,
                textAlign: "center",
              }}
            >
              <p
                className="text-white mb-2"
                style={{ fontSize: isMobileOrTablet ? "18px" : "24px" }}
              >
                Got a project?
              </p>
              <button
                className={`bg-white ${
                  isMdScreen
                    ? "px-4 py-4"
                    : isMobileOrTablet
                    ? "px-4 py-2"
                    : "px-4 py-4"
                } flex justify-between text-black items-center rounded-md`}
                style={{ fontSize: isMobileOrTablet ? "14px" : "16px" }}
              >
                <p className={`mr-2`}>FIND OUT MORE</p>
                <ArrowRightIcon height={15} />
              </button>
            </div>

            <div
              style={{
                marginTop: isMobileOrTablet ? 34 : 0,
                textAlign: "center",
              }}
            >
              <p
                className="text-white mb-2"
                style={{ fontSize: isMobileOrTablet ? "18px" : "24px" }}
              >
                Work with us
              </p>
              <button
                className={`bg-white ${
                  isMdScreen
                    ? "px-4 py-4"
                    : isMobileOrTablet
                    ? "px-4 py-2"
                    : "px-4 py-4"
                } flex justify-between text-black items-center rounded-md`}
                style={{ fontSize: isMobileOrTablet ? "14px" : "16px" }}
              >
                <p className={`mr-2`}>FIND OUT MORE</p>
                <ArrowRightIcon height={15} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderService;
