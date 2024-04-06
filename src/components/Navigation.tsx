"use client";
import React from "react";
import LogoIcon from "./svgs/LogoIcon";

const items = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
];

const Navigation = () => {
  const navItems = items.map((item, index) => ({
    id: index + 1,
    label: item.label,
    url: item.path,
  }));

  console.log(navItems);

  return (
    <div className="bg-white  rounded-full flex items-center h-20 justify-between px-6">
      {/* logo */}
      <div className="flex items-center">
        <div className="flex items-center cursor-pointer">
          <LogoIcon />
          <h2 className="font-bold text-2xl">MOSB DIGITAL</h2>
        </div>

        {/* nav link */}
        <nav className="flex items-center  space-x-6 capitalize ml-4">
          {navItems.map((item) => (
            <div key={item.id}>
              <a
                href={item.url}
                className="text-gray-600 hover:text-black transition duration-300 uppercase text-xl font-bold"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* contact button */}
      <div className="relative">
        <div className="bg-black px-4 py-3 uppercase rounded-full cursor-pointer transition duration-300 hover:bg-white  hover:border-4 border-black  text-white hover:text-black">
          <a href="#" className="flex items-center font-bold px-4 py-1">
            Contact us
          </a>
        </div>
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>
    </div>
  );
};

export default Navigation;
