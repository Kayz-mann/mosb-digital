import Image from "next/image";
import React from "react";
import CustomButton from "./module/CustomButton";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import Link from "next/link";

interface SliderProps {
  id: string;
  image: any;
  title: string;
  description: string;
  href: any;
}

const SliderCard = ({ image, title, description, href }: SliderProps) => {
  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallScreen = useMobileOrTablet(500);

  return (
    <div className={`${isMobileOrTablet ? "flex flex-col" : "flex flex-row"} `}>
      <div style={{ flex: 0.48 }}>
        <p
          style={{ fontSize: isSmallScreen ? "20px" : "32px" }}
          className="text-32 font-bold text-white"
        >
          {title}
        </p>

        <p
          style={{
            fontSize: 14,
            fontWeight: "300",
            marginTop: isSmallScreen ? 10 : 0,
          }}
          className="italic text-white"
        >
          {description}
        </p>
        <button
          style={{
            fontSize: "12px",
          }}
          className="px-4 py-1 items-center text-black font-extralight bg-white mt-2"
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

      <div style={{ flex: 0.49, marginTop: isMobileOrTablet ? "20px" : "0px" }}>
        <Image
          alt="mosb-about"
          src={image}
          style={{ height: "100%", width: "100%" }}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default SliderCard;
