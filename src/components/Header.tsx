"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import CustomButton from "./module/CustomButton";

const colors = ["#ff0000", "#1E07AA", "#15721F", "#721515", "#9747FF"];

const Header = () => {
  // const aboutUsText = `About us`;
  // const buttonText2 = `Services`;
  const bodyText = `Fuelling entrepreneurial success through strategic content managment`;

  const [index, setIndex] = useState(0);
  const isMobileOrTablet = useMobileOrTablet(768);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000); // Change color every 2 seconds (2000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  // plus-20
  return (
    <div
      style={{ backgroundColor: colors[index] }}
      className="bg-blue-400 h-100  items-center"
    >
      <div
        className={`mx-auto ${isMobileOrTablet ? "py-0" : "py-8"} ${
          isMobileOrTablet ? "w-full" : "w-4/5"
        }`}
      >
        <Navigation />
        <div className={`${isMobileOrTablet && "px-4"}`}>
          <div className="justify-left py-8 px-3">
            <h1
              className={`text-white font-bold text-8xl  uppercase italic line-height-6`}
              style={{
                fontSize: isMobileOrTablet ? "30px" : "90px",
                lineHeight: 1.1,
              }}
            >
              {bodyText}
            </h1>
          </div>

          <div className="py-4 space-x-4 px-4 flex">
            <CustomButton buttonText1="About us" buttonText2="About us" />
            <CustomButton buttonText1="Services" buttonText2="Services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
