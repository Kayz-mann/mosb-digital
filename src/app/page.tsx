"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AboutContent from "@/components/AboutContent";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageAdContent from "@/components/ImageAdContent";
import ServicesContent from "@/components/ServicesContent";
import SponsorContent from "@/components/SponsorContent";
import SliderContent from "@/components/SliderContent";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import useMobileOrTablet from "./hooks/useMobileOrTablet";

export default function Home() {
  const isMb = useMobileOrTablet(768);

  console.log(isMb);
  const queryClient = new QueryClient();

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Header />
        <Content />
        <ServicesContent />
        <AboutContent />
        <ImageAdContent />
        <SponsorContent />
        <SliderContent />
        <Footer />
      </QueryClientProvider>
    </main>
  );
}
