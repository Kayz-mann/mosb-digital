"use client";
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
}: ButtonProps) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
      ${bgColor || "bg-black"}
        px-14 py-6 uppercase rounded-md cursor-pointer transition duration-100
       ${bgColorHover || "hover:bg-white"}
       ${borderColor || "border-red"}
       hover:border-2 
       ${textColor || "text-white "}
       ${textColorHover || "hover:text-black"}
       overflow-hidden relative`}
      style={{ border: borderColor || "1px solid-red" }}
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
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            animationName: isHovered ? "fadeInUpDown" : "fadeOutDown",
          }}
        >
          {buttonText2}
        </span>
      </a>
    </button>
  );
};

export default CustomButton;
