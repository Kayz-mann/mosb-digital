import React from "react";
import Link from "next/link";
import { TruncatedText } from "../module/TruncatedText";
import Image, { StaticImageData } from "next/image";

import blogImage from "../../../public/assets/images/blogImage.png";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";

type ArticleCardProps = {
  id: string | number;
  imageSrc?: any;
  tag: string;
  title: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  imageSrc,
  tag,
  title,
}) => {
  const isMobileOrTablet = useMobileOrTablet(900);
  return (
    <div
      className={`w-[255px] ${
        isMobileOrTablet ? "h-[52vh]" : "h-[48vh]"
      } rounded-lg overflow-hidden relative shadow-lg flex mb-8`}
    >
      {/* <div
        className="h-[48%] bg-cover bg-center relative z-10 "
        style={{ backgroundImage: `url(${imageSrc.src})` }}
        // style={{ backgroundImage: imageSrc?.src }}
      ></div> */}
      <Image
        className="h-[58%] bg-cover bg-center relative"
        alt="blog"
        src={imageSrc}
        height={600}
        loading="lazy"
        quality={75}
      />
      <div className="bg-white absolute bottom-0 left-0 right-0 top-[46%] rounded-lg border-black px-2 py-3 z-10">
        <button className="bg-[#fff] py-2 px-4 rounded-full shadow-md cursor-not-allowed">
          <p
            style={{ fontSize: "10px", width: "80px" }}
            className="text-[#FAB005] text-center font-bold"
          >
            {tag}
          </p>
        </button>

        <div>
          <TruncatedText
            text={title}
            maxLength={45}
            className="font-semi-bold"
            style={{
              fontSize: "20px",
              width: "200px",
              marginTop: "10px",
            }}
          />
        </div>

        <Link href={`/article/${id}`}>
          <p
            className="text-sm underline text-[#C0BCBC] mt-2 font-bold"
            style={{ fontSize: "12px" }} // Adjust font size inline
          >
            Read Now
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
