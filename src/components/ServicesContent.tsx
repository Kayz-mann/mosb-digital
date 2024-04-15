import React from "react";
import HeaderService from "./HeaderService";
import FooterService from "./FooterService";

const ServicesContent = () => {
  return (
    <div className="flex-col">
      <HeaderService />
      <FooterService />
    </div>
  );
};

export default ServicesContent;
