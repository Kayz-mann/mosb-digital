import React from "react";
import categoryImage from "../../../public/assets/images/slider-image.png";
import Image from "next/image";
import { TruncatedText } from "../module/TruncatedText";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { urlFor } from "@/sanity";

interface CategoryProps {
  id?: string;
  image?: any;
  title: string;
  description: string;
  headline?: string;
  onClick?: () => void;
}

const CategoryCard = ({
  id,
  image,
  title,
  description,
  headline,
  onClick,
}: CategoryProps) => {
  const isMobileOrTablet = useMobileOrTablet(1024);

  return (
    <div className="">
      <div
        style={{ width: "299px" }}
        className="bg-white px-2 py-2 pb-4  items-center rounded-md"
      >
        <Image
          alt="category"
          src={image}
          height={350}
          width={285}
          objectFit="cover" // Use "cover" to fill the entire container with the image
          quality={100}
          // priority
          loading="lazy"
          className=" object-cover object-center md:w-[26rem] w-[46rem]  md:h-[25rem] h-[20rem]"
        />

        <TruncatedText
          // text="     Ford cuts prices on electric Mustang as demand softens for premium EVs"
          text={title}
          maxLength={95}
          className="justify-start text-left mt-2 text-18 font-bold text-wrap"
          style={{ lineHeight: 1.1 }}
        />

        <TruncatedText
          // text="Ford is cutting prices of its all-electric 2023 Mustang Mach-E by has
          // much as $8,100 as the automaker attempts to rid itself of inventory and
          // compete with Tesla and its increasingly cheaper EVs."
          text={description}
          maxLength={190}
          className="text-sm mt-2 text-black-500"
          style={{ fontSize: "8px", lineHeight: 1.4 }}
        />

        <div className="mt-6">
          <button
            onClick={onClick}
            style={{
              fontSize: "12px",
            }}
            className="px-4 py-1 items-center text-white font-extralight bg-black"
          >
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
