import React from "react";
import categoryImage from "../../../public/assets/images/slider-image.png";
import Image from "next/image";
import { TruncatedText } from "../module/TruncatedText";

const CategoryCard = () => {
  return (
    <div
      style={{ width: "299px" }}
      className="bg-white px-2 py-2  items-center rounded-md"
    >
      <Image alt="category" src={categoryImage} height={350} width={285} />

      <TruncatedText
        text="     Ford cuts prices on electric Mustang as demand softens for premium EVs"
        maxLength={100}
        className="justify-start text-left mt-2 text-18 font-bold text-wrap"
      />

      <TruncatedText
        text="Ford is cutting prices of its all-electric 2023 Mustang Mach-E by has
        much as $8,100 as the automaker attempts to rid itself of inventory and
        compete with Tesla and its increasingly cheaper EVs."
        maxLength={205}
        className="text-8 mt-2 text-gray-500"
      />

      <a
        href="/"
        className="px-6 py-2 items-center text-white font-extralight bg-black mt-8"
      >
        Read Now
      </a>
    </div>
  );
};

export default CategoryCard;
