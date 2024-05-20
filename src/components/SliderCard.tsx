import Image from "next/image";
import React from "react";
import CustomButton from "./module/CustomButton";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import Link from "next/link";
import { TruncatedText } from "./module/TruncatedText";

interface SliderProps {
  id: string;
  image: string; // Changed to string to ensure type consistency
  title: string;
  description: string;
  href: any;
}

const SliderCard = ({ image, title, description, href }: SliderProps) => {
  const isMd = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallScreen = useMobileOrTablet(500);

  return (
    <div className={`${isMobileOrTablet ? "flex flex-col" : "flex flex-row"} `}>
      <div style={{ flex: 0.48 }}>
        <p
          style={{
            fontSize: isSmallScreen ? "20px" : isMd ? "24px" : "32px",
            lineHeight: 1.2,
          }}
          className="text-32 font-bold text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <TruncatedText
          text={description}
          maxLength={485}
          className="italic text-white"
          style={{
            fontSize: 14,
            fontWeight: "300",
            marginTop: isSmallScreen ? 10 : 0,
          }}
        />
        <button
          style={{
            fontSize: "12px",
          }}
          className="px-4 py-1 items-center text-black font-extralight bg-white mt-4"
        >
          <Link href={href}>Read Now</Link>
        </button>
      </div>

      <span
        style={{
          flex: 0.49,
          marginTop: isMobileOrTablet ? "20px" : "0px",
          marginLeft: isMobileOrTablet ? "0px" : "14px",
          zIndex: 0,
        }}
      >
        <Image
          alt="mosb-about"
          src={image} // Directly using the string URL here
          width={800}
          height={400} // Set the height to the desired value
          objectFit="contain" // Use "cover" to fill the entire container with the image
          style={{ height: "100%", width: "100%" }}
        />
      </span>
    </div>
  );
};

export default SliderCard;
