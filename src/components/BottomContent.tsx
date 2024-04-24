import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BottomProps {
  bgColor?: string;
}

const BottomContent = ({ bgColor }: BottomProps) => {
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
    <div
      className={`h-1/8 ${
        bgColor || "bg-white"
      } flex items-center justify-center`}
    >
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
  );
};

export default BottomContent;
