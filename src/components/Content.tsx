"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

const Content = () => {
  return (
    <div>
      <TopContent href={"/"} />
      <BottomContent />
    </div>
  );
};

export default Content;
