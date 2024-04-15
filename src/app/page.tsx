"use client";
import AboutContent from "@/components/AboutContent";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageAdContent from "@/components/ImageAdContent";
import ServicesContent from "@/components/ServicesContent";
import SponsorContent from "@/components/SponsorContent";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMobileOrTablet from "./hooks/useMobileOrTablet";

export default function Home() {
  const isMobileOrTablet = useMobileOrTablet();
  return (
    <main>
      <Header />
      <Content />
      <ServicesContent />
      <AboutContent />
      <ImageAdContent />
      <SponsorContent />
    </main>
  );
}
