/* eslint-disable react/no-unescaped-entities */
"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import Link from "next/link";

const ImageAdContent = () => {
  const isMobileOrTablet = useMobileOrTablet(768);

  return (
    <div
      className={`h-screen/3 w-full bg-black flex items-center justify-center text-center ${
        isMobileOrTablet ? "px-10" : "px-40"
      }`}
      style={{ zIndex: 0 }}
    >
      <div>
        <p
          style={{ fontSize: isMobileOrTablet ? "18px" : "40px" }}
          className="text-white italic font-bold pt-8"
        >
          What's Your Next Bold Move?
        </p>

        <p
          style={{
            fontSize: isMobileOrTablet ? "14px" : "24px",
            lineHeight: 1.1,
          }}
          className="text-white py-2 font-light"
        >
          It takes a bold move to stay ahead of the curve and build a
          spectacular brand
        </p>

        <Link
          href="/form"
          className="flex items-center justify-center pt-2 pb-8"
        >
          <div className="rounded-full border border-[#FAB005] px-6 py-2 mx-2 cursor-pointer hover:bg-[#FAB005] ">
            <p
              style={{ fontSize: "12px" }}
              className="text-white uppercase font-bold"
            >
              Let's Talk
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageAdContent;
