"use client";
import React from "react";
import SponsorSlider from "./module/SponsorSlider";

const SponsorContent = () => {
  const sponsorImages = [
    "/assets/images/johnnie-walker.png",
    "/assets/images/hair.png",
    "/assets/images/nike.png",
    "/assets/images/cap.png",
    "/assets/images/forbes.png",
    "/assets/images/spotify.png",
  ];

  return (
    <div className="w-full max-w-screen-lg">
      <SponsorSlider images={sponsorImages} />
    </div>
  );
};

export default SponsorContent;
