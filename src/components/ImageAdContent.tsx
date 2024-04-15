/* eslint-disable react/no-unescaped-entities */
"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";

const ImageAdContent = () => {
  const isMobileOrTablet = useMobileOrTablet(768);

  return (
    <div
      className={`h-screen/3 w-full bg-black flex items-center justify-center text-center ${
        isMobileOrTablet ? "px-10" : "px-40"
      }`}
    >
      <div>
        <p
          style={{ fontSize: isMobileOrTablet ? "30px" : "40px" }}
          className="text-white italic font-bold pt-8"
        >
          What's Your Next Bold Move?
        </p>

        <p
          style={{ fontSize: isMobileOrTablet ? "16px" : "24px" }}
          className="text-white py-2 font-light"
        >
          It takes a bold move to stay ahead of the curve and build a
          spectacular brand
        </p>

        <div className="flex items-center justify-center pb-8">
          <div className="rounded-full border border-[#FAB005] px-4 py-2 mx-2">
            <p className="text-white uppercase">Let's Talk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAdContent;
