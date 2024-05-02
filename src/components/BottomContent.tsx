import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";

interface BottomProps {
  bgColor?: string;
  staticText?: string;
  alternateWords?: string[];
}

const BottomContent = ({
  bgColor,
  alternateWords,
  staticText,
}: BottomProps) => {
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const words = alternateWords ?? [
    "businesses",
    "people",
    "the world forward.",
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMd = useMobileOrTablet(768);
  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallerPhone = useMobileOrTablet(340);
  const isXl = useMobileOrTablet(2560);
  const isLargeScreen = screenWidth >= 1440;
  const isLargerScreen = screenWidth >= 2550;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div
      className={`h-1/8 ${bgColor || "bg-white"} ${
        isMd ? "items-start justify-start" : "flex items-center justify-center "
      }`}
    >
      <p
        className={`font-bold text-wrap ${
          isSmallerPhone
            ? "w-10/14 text-md text-left pl-6 -pt-20"
            : isMobileOrTablet
            ? "w-10/14 text-xl text-left pl-6 -pt-20"
            : isMd
            ? "text-left"
            : "w-2/3 text-3xl text-center"
        } py-10`}
        style={{
          width: isMd ? "80%" : "75%",
          position: "relative",
        }}
      >
        {staticText ||
          "We bring the best minds together to create content that move "}
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-block",
            whiteSpace: "normal", // Allow text wrapping
            backgroundImage: "linear-gradient(90deg, #FF1322, #FCB000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            width: isMobileOrTablet ? "auto" : "40%", // Adjust the width to allow content to determine size
            justifyContent: "flex-start",
            textAlign: isLargeScreen ? "center" : "start",
            marginLeft: isLargerScreen ? "-295px" : "0px",
          }}
        >
          {words[index]}
        </motion.span>
      </p>
    </div>
  );
};

export default BottomContent;
