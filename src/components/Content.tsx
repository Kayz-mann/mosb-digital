"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Content = () => {
  const [index, setIndex] = useState(0);
  const words = ["businesses", "people", "the world forward."];

  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallerPhone = useMobileOrTablet(468);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* First half */}
      <div
        className={`h-1/8 bg-gray-300 w-full flex py-8   ${
          isMobileOrTablet
            ? "px-6 flex-col h-1/8 text-left justify-start"
            : "justify-center px-28"
        }`}
      >
        <div
          className={`${isMobileOrTablet ? "w-screen/2 mb-2" : "w-2/3 mb-10"}`}
          style={{ flex: isMobileOrTablet ? 1.0 : 0.6 }}
        >
          {/* Content for the first half */}
          <p
            style={{ lineHeight: 1.2 }}
            className={`text-black-100 ${
              isMobileOrTablet
                ? "text-xl justify-left text-left font-bold"
                : "text-4xl"
            }`}
          >
            {`We Are Atlanta’s Leading Content Management Agency.`}
          </p>
        </div>
        <div
          style={{ flex: isMobileOrTablet ? 1.0 : 0.6 }}
          className={`flex flex-col ${"items-start"} text-left items-start justify-start`}
        >
          <p
            className={`text-black-100 mb-4 text-base ${
              isMobileOrTablet && "text-sm"
            }`}
          >
            We give our clients the confidence to make a bold statement.
          </p>
          <div
            style={{
              marginTop: isMobileOrTablet ? 8 : 0,
              alignItems: "left",
              justifyContent: "flex-start",
              flex: 1.0,
              // width: "80%",
            }}
          >
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
          </div>
        </div>
      </div>

      {/* Second half */}
      <div className={`h-1/8 bg-white flex items-center justify-center`}>
        <p
          className={`font-bold   ${
            isMobileOrTablet
              ? "w-10/14 text-2xl text-left pl-6 -pt-20"
              : "w-2/3 text-3xl text-center"
          } py-16`}
        >
          We bring the best minds together to create content that move{" "}
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              backgroundImage: "linear-gradient(90deg, #FF1322, #FCB000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {words[index]}
          </motion.span>
        </p>
      </div>
    </div>
  );
};

export default Content;
