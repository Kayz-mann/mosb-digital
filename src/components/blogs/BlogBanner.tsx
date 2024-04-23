import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React from "react";
import { TruncatedText } from "../module/TruncatedText";
import CustomButton from "../module/CustomButton";
import Image from "next/image";
import blogImage from "../../../public/assets/images/blogImage.png";

interface BlogBannerProps {
  title: string;
  description: string;
  image: any;
  onButtonClick: () => void;
}

const BlogBanner = ({
  title,
  description,
  image,
  onButtonClick,
}: BlogBannerProps) => {
  const isMobileOrTablet = useMobileOrTablet(1024);

  return (
    <div
      className={`bg-white px-4 py-4 rounded-lg w-full flex mt-10 shadow-lg ${
        isMobileOrTablet ? "flex-col-reverse" : "flex-row justify-between"
      }`}
    >
      <div style={{ flex: 0.4, marginLeft: isMobileOrTablet ? 0 : 20 }}>
        <TruncatedText
          text={title}
          className={`${isMobileOrTablet ? "text-xl" : "text-3xl"} font-bold`}
          maxLength={95}
          style={{ lineHeight: 1.2 }}
        />

        <TruncatedText
          text={description}
          className="text-base text-gray-600 mt-4"
          maxLength={100}
          style={{ lineHeight: 1.2 }}
        />

        <div className="mt-4">
          <button
            onClick={() => {}}
            style={{
              fontSize: "12px",
            }}
            className="px-4 py-1 items-center text-white font-extralight bg-black"
          >
            Read Now
          </button>
        </div>

        {/* <div className="mt-4">
          <CustomButton
            buttonText1="Read now"
            buttonText2="Read now"
            borderColor="border-black"
            onClick={onButtonClick}
          />
        </div> */}
      </div>
      <div
        style={{
          flex: 0.5,
          marginTop: isMobileOrTablet ? 40 : 0,
          marginBottom: isMobileOrTablet ? 20 : 0,
          display: "flex",
          justifyContent: isMobileOrTablet ? "center" : "flex-end",
        }}
      >
        <Image
          alt="blog"
          src={image || blogImage}
          width={isMobileOrTablet ? 403 : 300}
          height={300}
        />
      </div>
    </div>
  );
};

export default BlogBanner;
