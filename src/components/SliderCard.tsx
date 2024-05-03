import Image from "next/image";
import React from "react";
import CustomButton from "./module/CustomButton";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import Link from "next/link";
import { urlFor } from "@/sanity";
import { TruncatedText } from "./module/TruncatedText";

interface SliderProps {
  id: string;
  image: any;
  title: string;
  description: string;
  href: any;
}

const SliderCard = ({ image, title, description, href }: SliderProps) => {
  const isMd = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallScreen = useMobileOrTablet(500);

  const imageUrl = urlFor(image)
    .width(200) // Set the desired width
    .height(200) // Set the desired height
    .quality(100) // Set the desired quality (optional)
    .url();

  return (
    <div className={`${isMobileOrTablet ? "flex flex-col" : "flex flex-row"} `}>
      <div style={{ flex: 0.48 }}>
        <p
          style={{
            fontSize: isSmallScreen ? "20px" : isMd ? "24px" : "32px",
            lineHeight: 1.2,
          }}
          className="text-32 font-bold text-white"
        >
          {title}
        </p>

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

        {/* <div
          style={{ marginTop: "40px", gap: 8 }}
          className={`flex ${
            isMobileOrTablet && "items-center w-full justify-start mb-24"
          }  `}
        >
           <CustomButton
            bgColor={"bg-[#FAB005]"}
            bgColorHover={"hover:bg-[#FA0505]"}
            textColor={"text-black"}
            textColorHover={"hover:text-white"}
            buttonText1="Our Services"
            buttonText2="Our Services"
            borderColor="border-red-500" // Change the border color to red
          /> 
        </div> */}
      </div>

      <div
        style={{
          flex: 0.49,
          marginTop: isMobileOrTablet ? "20px" : "0px",
          marginLeft: isMobileOrTablet ? "0px" : "14px",
        }}
      >
        <Image
          alt="mosb-about"
          src={imageUrl}
          layout="fixed"
          width={800}
          height={400} // Set the height to the desired value
          objectFit="cover" // Use "cover" to fill the entire container with the image
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default SliderCard;
