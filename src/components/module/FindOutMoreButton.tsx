import React, { useState } from "react";
import ArrowRightIcon from "@heroicons/react/20/solid/ArrowRightIcon";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";

const FindOutMoreButton = ({ buttonText }: { buttonText?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobileOrTablet = useMobileOrTablet(1204);
  const isSmallerPhone = useMobileOrTablet(640);

  return (
    <button
      className={`bg-black ${
        isSmallerPhone
          ? "px-1 py-2 rounded-0"
          : isMobileOrTablet
          ? "px-2 py-2 rounded-0"
          : "px-4 py-3"
      } flex justify-between text-white items-center rounded-md`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <p
        style={{
          fontSize: isSmallerPhone ? "8px" : "14px",
          paddingLeft: "4px",
          transition: "all 0.3s ease-in-out",
          transform: isHovered ? "translateX(5px)" : "translateX(0)",
        }}
        className={`mr-4`}
      >
        {buttonText || `FIND OUT MORE`}
      </p> */}
      <span
        className={`transition-all duration-300 absolute left-0 right-0 ${
          isMobileOrTablet ? "top-3" : "top-4"
        } bottom-0 ${isHovered ? "-translate-y-full" : "translate-y-0"}`}
        style={{
          animationName: isHovered ? "fadeOutUp" : "fadeIn",
          fontSize: isMobileOrTablet ? "12px" : "16px",
        }}
      >
        {buttonText || `FIND OUT MORE`}
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
        {buttonText || `FIND OUT MORE`}
      </span>
      <ArrowRightIcon
        height={15}
        style={{
          transition: "all 0.3s ease-in-out",
          transform: isHovered ? "translateX(5px)" : "translateX(0)",
        }}
      />
    </button>
  );
};

export default FindOutMoreButton;
