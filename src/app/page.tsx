"use client";
import AboutContent from "@/components/AboutContent";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageAdContent from "@/components/ImageAdContent";
import ServicesContent from "@/components/ServicesContent";
import SponsorContent from "@/components/SponsorContent";
import useMobileOrTablet from "./hooks/useMobileOrTablet";
import SliderContent from "@/components/SliderContent";

export default function Home() {
  const isMobileOrTablet = useMobileOrTablet(768);

  return (
    <main>
      <Header />
      <Content />
      <ServicesContent />
      <AboutContent />
      <ImageAdContent />
      <SponsorContent />
      <SliderContent />
    </main>
  );
}
