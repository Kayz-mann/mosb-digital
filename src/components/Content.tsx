"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

const Content = () => {
  const isMd = useMobileOrTablet(1024);
  return (
    <div>
      <TopContent
        width={"100%"}
        px={isMd ? `px-28` : `px-44`}
        href={"/about"}
      />
      <BottomContent />
    </div>
  );
};

export default Content;
