"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React, { useState } from "react";

interface ButtonProps {
  buttonText1?: string;
  buttonText2?: string;
  bgColor?: string;
  bgColorHover?: string;
  textColor?: string;
  textColorHover?: string;
  borderColor?: string;
  borderColorHover?: string;
  onClick?: () => void;
}

const CustomButton = ({
  buttonText1,
  buttonText2,
  bgColor,
  bgColorHover,
  textColor,
  textColorHover,
  borderColor,
  borderColorHover,
  onClick,
}: ButtonProps) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMobileOrTablet = useMobileOrTablet(1204);

  return (
    <button
      onClick={onClick}
      className={`
      ${bgColor || "bg-black"}
        ${
          isMobileOrTablet ? "px-12 py-6" : "px-14 py-6"
        } uppercase rounded-md cursor-pointer transition duration-100 border ${
        borderColor || "border-red-500"
      }
       ${bgColorHover || "hover:bg-white"}

       ${textColor || "text-white "}
       ${textColorHover || "hover:text-black"}
       overflow-hidden relative`}
      // style={{ border: borderColor || "1px solid-red" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="flex items-center font-bold px-4 py-1">
        <span
          className={`transition-all duration-300 absolute left-0 right-0 top-4 bottom-0 ${
            isHovered ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{ animationName: isHovered ? "fadeOutUp" : "fadeIn" }}
        >
          {buttonText1}
        </span>
        <span
          className={`absolute left-0 right-0 bottom-4 flex items-center justify-center ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 "
          }`}
          style={{
            animationName: isHovered ? "fadeInUpDown" : "fadeOutDown",
            // fontSize:
          }}
        >
          {buttonText2}
        </span>
      </a>
    </button>
  );
};

export default CustomButton;
