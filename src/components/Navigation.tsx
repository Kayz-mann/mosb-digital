"use client";
import React, { useState } from "react";
import LogoIcon from "./svgs/LogoIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import CustomButton from "./module/CustomButton";
import Link from "next/link";
import logo from "../../public/assets/images/m-logo.png";
import Image from "next/image";

const items = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
];

interface NavProps {
  bgColor?: string;
  isScrolled?: boolean;
}

const Navigation = ({ bgColor, isScrolled }: NavProps) => {
  const isMobileOrTablet = useMobileOrTablet(768);
  const isSmallMobile = useMobileOrTablet(380);
  const navItems = items.map((item, index) => ({
    id: index + 1,
    label: item.label,
    url: item.path,
  }));

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonText1 = "Contact us";
  const buttonText2 = "Contact us";

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div
      className={`${isScrolled ? "bg-[#DADADA] opacity-90" : `${bgColor || "bg-white"}`} sticky top 0 z-999 ${isScrolled ? "rounded-full" : ""}  fixed${
        isMobileOrTablet ? "rounded-none flex px-4" : " flex px-6"
      } ${isMobileOrTablet ? "h-16" : "h-20"} items-center  justify-between`}
      style={{ zIndex: 999 }} // Ensure the zIndex is set to 999 for the Navigation component
    >
      {/* logo */}
      <div className="flex items-center" style={{ zIndex: 999 }}>
        <Link href={"/"} className="flex items-center cursor-pointer">
          <span className="" style={{ zIndex: 999 }}>
            {/* <LogoIcon /> */}
            <Image src={logo} alt={"mosb-digital"} height={54} width={54} />
          </span>
          <h2
            className={`font-bold  ${
              isSmallMobile
                ? "text-sm"
                : isMobileOrTablet
                  ? "text-2xl"
                  : "text-3xl"
            } align-baseline `}
          >
            Mosb Digital
          </h2>
        </Link>

        {/* nav link */}
        {!isMobileOrTablet && (
          <nav
            className="flex items-center  space-x-6 capitalize ml-4"
            style={{ zIndex: 999 }}
          >
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
        <Link href={"/contact"} className="relative" style={{ zIndex: 999 }}>
          <div
            className="bg-black px-12 py-6 uppercase rounded-full cursor-pointer transition duration-100 hover:bg-white hover:border-2 border-black text-white hover:text-black overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#" className="flex items-center font-bold px-4 py-1">
              <span
                className={`transition-all duration-300 absolute left-2 top-4 bottom-0 z-50 ${
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
        </Link>
      )}

      {isMobileOrTablet && (
        <div className="ml-5 cursor-pointer flex items-center ">
          {isMobileNavOpen ? (
            <XMarkIcon
              color="#000"
              className="icon"
              height={40}
              onClick={toggleMobileNav}
            />
          ) : (
            <Bars3Icon
              color="#000"
              className="icon"
              height={isSmallMobile ? 30 : isMobileOrTablet ? 35 : 40}
              onClick={toggleMobileNav}
            />
          )}
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobileNavOpen && (
        <nav
          className="fixed top-0 left-0 w-full  bg-white flex flex-col  items-center z-50  h-[300px] pt-10"
          style={{
            zIndex: 999,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          {isMobileNavOpen === true && (
            <div
              className="flex justify-between items-center w-full"
              style={{ marginTop: -30, marginRight: 20 }}
            >
              {/* Empty div to push the close icon to the right */}
              <div></div>
              <XMarkIcon
                color="#000"
                className="icon cursor-pointer"
                height={40}
                onClick={toggleMobileNav}
              />
            </div>
          )}
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
          <Link
            href={"/contact"}
            className="text-gray-600 hover:text-black transition duration-300 uppercase text-xl font-bold mb-4"
          >
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
