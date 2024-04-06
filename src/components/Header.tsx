"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

const colors = [
  // "#ff0000",
  // "#00ff00",
  // "#0000ff"
  "#cecece",
];

const Header = () => {
  const buttonText1 = `About us`;
  const buttonText2 = `Services`;
  const bodyText = `Fuelling entrepreneurial success through strategic content managment`;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change color every 2 seconds (2000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{ backgroundColor: colors[index] }}
      className="bg-blue-400 h-screen items-center"
    >
      <div className="w-4/5 mx-auto py-8">
        <Navigation />

        <div className="justify-left py-8">
          <h1 className="text-white font-bold text-8xl uppercase italic">
            {bodyText}
          </h1>
        </div>

        <div className="py-8 space-x-4 ">
          <button className="bg-black rounded-md px-4 py-3 text-white uppercase font-bold text-lg hover:bg-white hover:border-black border-2 hover:text-black">
            {buttonText1}
          </button>

          <button className="bg-black rounded-md px-4 py-3 text-white uppercase font-bold text-lg hover:bg-white hover:border-black border-2 hover:text-black">
            {buttonText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
