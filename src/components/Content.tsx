"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Content = () => {
  const [index, setIndex] = useState(0);
  const words = ["businesses", "people", "the world forward ."];

  const isMobileOrTablet = useMobileOrTablet(900);

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
        className={`h-1/8 bg-gray-300 w-full flex py-8 justify-center  ${
          isMobileOrTablet ? "px-10 flex-col h-1/8 items-center" : "px-40"
        }`}
      >
        <div className="w-2/3 mb-10" style={{ flex: 0.6 }}>
          {/* Content for the first half */}
          <p
            className={`text-black-100 ${
              isMobileOrTablet
                ? "text-2xl justify-center text-center"
                : "text-4xl"
            }`}
          >
            {`We Are Atlanta’s Leading Content Management Agency.`}
          </p>
        </div>
        <div
          style={{ flex: 0.4 }}
          className={`${
            isMobileOrTablet
              ? "flex flex-col items-center justify-center text-center"
              : "items-start"
          }`}
        >
          <p
            className={`text-black-100 mb-4 ${
              isMobileOrTablet ? "text-base justify-center" : "text-base"
            }`}
          >
            {`We give our clients the confidence to make a bold statement.`}
          </p>
          <div style={{ marginTop: isMobileOrTablet ? 8 : 0 }}>
            <button className="bg-black px-4 py-4 flex justify-between text-white items-center rounded-md">
              <p className={`mr-4`}>FIND OUT MORE</p>
              <ArrowRightIcon height={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Second half */}
      <div className={`h-1/8 bg-white flex items-center justify-center`}>
        <p
          className={`font-bold text-3xl text-center ${
            isMobileOrTablet ? "w-10/14" : "w-2/3"
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
