"use client";
import React, { useState } from "react";
import LogoIcon from "./svgs/LogoIcon";
import {
  Bars3Icon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import CustomButton from "./module/CustomButton";
import Link from "next/link";

const items = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
];

interface NavProps {
  bgColor?: string;
}

const Navigation = ({ bgColor }: NavProps) => {
  const isMobileOrTablet = useMobileOrTablet(768);
  const isSmallMobile = useMobileOrTablet(380);
  const navItems = items.map((item, index) => ({
    id: index + 1,
    label: item.label,
    url: item.path,
  }));

  console.log(navItems);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonText1 = "Contact us";
  const buttonText2 = "Contact us";

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div
      className={`${bgColor || "bg-white"} sticky top 0 z-50 ${
        isMobileOrTablet ? "rounded-none flex px-2" : "rounded-full flex px-6"
      }  items-center h-20 justify-between `}
    >
      {/* logo */}
      <div className="flex items-center">
        <div className="flex items-center cursor-pointer">
          <span className="-mt-2">
            <LogoIcon />
          </span>
          <h2
            className={`font-bold  ${
              isSmallMobile
                ? "text-2xl"
                : isMobileOrTablet
                ? "text-3xl"
                : "text-3xl"
            } align-baseline `}
          >
            MOSB DIGITAL
          </h2>
        </div>

        {/* nav link */}
        {!isMobileOrTablet && (
          <nav className="flex items-center  space-x-6 capitalize ml-4">
            {navItems.map((item) => (
              <div key={item.id}>
                <Link
                  href={item.url}
                  className="text-gray-600 hover:text-black transition duration-300 uppercase text-xl font-bold"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* contact button */}
      {!isMobileOrTablet && (
        <div className="relative">
          <div
            className="bg-black px-12 py-6 uppercase rounded-full cursor-pointer transition duration-100 hover:bg-white hover:border-2 border-black text-white hover:text-black overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#" className="flex items-center font-bold px-4 py-1">
              <span
                className={`transition-all duration-300 absolute left-2 top-4 bottom-0 ${
                  isHovered ? "-translate-y-full" : "translate-y-0"
                }`}
                style={{ animationName: isHovered ? "fadeOutUp" : "fadeIn" }}
              >
                {buttonText1}
              </span>
              <span
                className={`absolute left-0 right-0 bottom-4 flex items-center justify-center ${
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  animationName: isHovered ? "fadeInUpDown" : "fadeOutDown",
                }}
              >
                {buttonText2}
              </span>
            </a>
          </div>
          {/* 
          <CustomButton
            buttonText={[buttonText1, buttonText2]}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? "white" : "black",
              border: isHovered ? "2px solid black" : "none",
              color: isHovered ? "black" : "white",
              borderRadius: "999px",
              cursor: "pointer",
              padding: "6px 48px",
              textTransform: "uppercase",
              transition: "all 100ms",
              height: 48,
            }}
          /> */}
        </div>
      )}

      {isMobileOrTablet && (
        <div className="ml-5 cursor-pointer flex items-center lg:hidden z-50">
          {isMobileNavOpen ? (
            <XMarkIcon className="icon" height={40} onClick={toggleMobileNav} />
          ) : (
            <Bars3Icon className="icon" height={40} onClick={toggleMobileNav} />
          )}
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobileNavOpen && (
        <nav className="fixed top-0 left-0 w-full h-full bg-white flex flex-col  items-center z-10  py-28">
          {navItems.map((item) => (
            <div key={item.id} className="mb-8">
              <a
                href={item.url}
                className="text-gray-600 hover:text-black transition duration-300 uppercase text-xl font-bold mb-4"
                onClick={toggleMobileNav}
              >
                {item.label}
              </a>
            </div>
          ))}
          <a
            href={"/contact"}
            className="text-gray-600 hover:text-black transition duration-300 uppercase text-xl font-bold mb-4"
          >
            Contact Us
          </a>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
