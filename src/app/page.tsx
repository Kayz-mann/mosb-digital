import AboutContent from "@/components/AboutContent";
import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageAdContent from "@/components/ImageAdContent";
import ServicesContent from "@/components/ServicesContent";
import SponsorContent from "@/components/SponsorContent";
import SliderContent from "@/components/SliderContent";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <Toaster />
      <Header />
      <Content />
      <ServicesContent />
      <AboutContent />
      <ImageAdContent />
      <SponsorContent />
      <SliderContent />
      <Footer />
    </main>
  );
}
