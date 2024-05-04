import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import CustomButton from "./module/CustomButton";
import Link from "next/link";
import useScroll from "@/app/hooks/useScroll";

const colors = ["#1E07AA", "#15721F", "#721515", "#9747FF"];

const Header = () => {
  // const aboutUsText = `About us`;
  // const buttonText2 = `Services`;
  const isScrolled = useScroll();
  const bodyText = `Fuelling entrepreneurial success through strategic content managment`;

  const [index, setIndex] = useState(0);
  const [showBackground, setShowBackground] = useState(true);
  const isMobileOrTablet = useMobileOrTablet(768);
  const isMd = useMobileOrTablet(1024);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setShowBackground(false); // Start fade-out animation
      setTimeout(() => setShowBackground(true), 1000); // After 500ms, start fade-in animation
    }, 5000); // Change color every 5 seconds (5000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  // plus-20
  return (
    <div
      style={{
        backgroundColor: colors[index],
        transition: "background-color 1.5s", // Add transition effect to background color
      }}
      className="bg-blue-400 h-100 items-center relative" // Add relative positioning here
    >
      {/* ${isMobileOrTablet ? "py-0" : "py-8"} */}
      <div
        className={`ease-in-out transition-padding duration-500 ${
          isScrolled ? "py-14" : "py-0"
        } ${isMobileOrTablet ? "w-full" : "w-4/5"}`}
        style={{
          scrollBehavior: "smooth", // Enable smooth scrolling behavior
        }}
      >
        <span
          className={`fixed left-1/2 transform -translate-x-1/2 z-50 ${
            isScrolled ? "w-[80%]" : "w-full"
          } transition-width duration-500`}
        >
          <Navigation isScrolled={isScrolled} />
        </span>

        {/* <div className="fixed">
         
        </div> */}
        <div className={`pt-24 ${isMobileOrTablet ? "px-4" : "px-4"}`}>
          <div className="justify-left py-4 px-3">
            <h1
              className={`text-white font-bold text-8xl uppercase italic line-height-6`}
              style={{
                fontSize: isMobileOrTablet ? "30px" : isMd ? "60px" : "90px",
                lineHeight: 1.0,
              }}
            >
              {bodyText}
            </h1>
          </div>

          <div className="py-2 space-x-4 px-4 flex" style={{ zIndex: 1 }}>
            {" "}
            {/* Increase the z-index here */}
            <Link href={"/about"}>
              <CustomButton
                buttonText1="About us"
                buttonText2="About us"
                borderColor="border-black"
              />
            </Link>
            <Link href={"/services"}>
              <CustomButton
                buttonText1="Services"
                buttonText2="Services"
                borderColor="border-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
