import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const words = alternateWords ?? [
    "businesses",
    "people",
    "the world forward.",
  ];

  const isMd = useMobileOrTablet(768);
  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallerPhone = useMobileOrTablet(340);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`h-1/8 ${bgColor || "bg-white"} ${
        isMd ? "items-start justify-start" : "flex items-center justify-center "
      }`}
    >
      <p
        className={`font-bold   ${
          isMobileOrTablet
            ? "w-10/14 text-xl text-left pl-6 -pt-20"
            : isMd
            ? "text-left"
            : "w-2/3 text-3xl text-center"
        } py-10`}
        style={{ width: isMd ? "80%" : "75%", position: "relative" }}
      >
        {staticText ||
          " We bring the best minds together to create content that move"}
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
            width: "34%",
            justifyContent: "flex-start",
            textAlign: "start",
          }}
        >
          {words[index]}
        </motion.span>
      </p>
    </div>
  );
};

export default BottomContent;
