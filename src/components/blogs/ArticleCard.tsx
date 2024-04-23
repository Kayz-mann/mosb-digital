import React from "react";
import Link from "next/link";
import { TruncatedText } from "../module/TruncatedText";
import { StaticImageData } from "next/image";

type ArticleCardProps = {
  id: string | number;
  imageSrc?: StaticImageData;
  tag: string;
  title: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  imageSrc,
  tag,
  title,
}) => {
  return (
    <div className="max-w-[255px] h-[45vh] rounded-lg overflow-hidden relative shadow-lg">
      <div
        className="h-[48%] bg-cover bg-center relative z-10 "
        style={{ backgroundImage: `url(${imageSrc})` }}
        // style={{ backgroundImage: `url(${})` }}
      ></div>
      <div className="bg-white absolute bottom-0 left-0 right-0 top-[46%] h-[54%] rounded-lg border-black px-2 py-3 z-10">
        <button className="bg-[#fff] py-2 px-2 rounded-full shadow-md cursor-not-allowed">
          <p
            style={{ fontSize: "14px", width: "80px" }}
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
          <p className="text-sm underline text-[#C0BCBC] mt-2 font-bold">
            Read Now
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
