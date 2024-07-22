"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import ArrowRightIcon from "@heroicons/react/20/solid/ArrowRightIcon";
import React, { ButtonHTMLAttributes, useState } from "react";

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
  type?: any;
  disabled?: boolean;
}

const CustomButton = ({
  buttonText1,
  buttonText2,
  bgColor,
  bgColorHover,
  textColor,
  textColorHover,
  borderColor,
  disabled,
  borderColorHover,
  type,
  onClick,
}: ButtonProps) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMobileOrTablet = useMobileOrTablet(1204);

  return (
    <button
      disabled={disabled}
      type={type ?? "button"}
      onClick={onClick}
      className={`
      ${bgColor || "bg-black"}
        ${
          isMobileOrTablet ? "px-10 py-4" : "px-14 py-6"
        } uppercase rounded-md cursor-pointer transition duration-100 border ${
          borderColor || "border-red-500"
        }
      ${borderColorHover}
       ${bgColorHover || "hover:bg-white"}

       ${textColor || "text-white "}
       ${textColorHover || "hover:text-black"}
       overflow-hidden relative flex flex-row`}
      // style={{ border: borderColor || "1px solid-red" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="flex items-center font-bold px-4 py-1">
        <span
          className={`transition-all duration-300 absolute left-0 right-0 ${
            isMobileOrTablet ? "top-3" : "top-4"
          } bottom-0 ${isHovered ? "-translate-y-full" : "translate-y-0"}`}
          style={{
            animationName: isHovered ? "fadeOutUp" : "fadeIn",
            fontSize: isMobileOrTablet ? "12px" : "16px",
          }}
        >
          {buttonText1}
        </span>
        <span
          className={`absolute left-0 right-0 bottom-4 flex items-center justify-center ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 "
          } ${isMobileOrTablet ? "top-4" : "top-4"}`}
          style={{
            animationName: isHovered ? "fadeInUpDown" : "fadeOutDown",
            fontSize: isMobileOrTablet ? "12px" : "16px",
          }}
        >
          {buttonText2}
        </span>
      </a>
    </button>
  );
};

export default CustomButton;
