import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React from "react";
import Image from "next/image";
import SmallLogoIcon from "./svgs/SmallLogoIcon";

import instagramImage from "../../public/assets/images/instagram.png";
import facebookImage from "../../public/assets/images/facebook.png";
import linkedInImage from "../../public/assets/images/linkedIn.png";
import twitterImage from "../../public/assets/images/twitter.png";
import Link from "next/link";

const Footer = () => {
  const isMobileOrTablet = useMobileOrTablet(900);

  return (
    <div
      className={`h-screen/2 w-screen bg-[#FAB005] pb-20 ${
        isMobileOrTablet ? "px-6" : "px-28"
      }`}
    >
      <div
        className={` flex  justify-between   ${
          isMobileOrTablet
            ? "flex-col gap-4 justify-start pt-10"
            : "flex-row items-center pt-24"
        }`}
      >
        <div className="flex flex-row">
          <SmallLogoIcon />
          <p className={`text-xl font-semibold ${isMobileOrTablet && "mb-4"}`}>
            Mosb Digital
          </p>
        </div>

        <Link href={"/contact"}>
          <button className="border-black border-2 rounded-lg px-2 py-2 cursor-pointer ">
            GET IN CONTACT
          </button>
        </Link>

        {/* {isMobileOrTablet && (
          <button className="border-black border-2 rounded-lg px-2 py-2 cursor-pointer mb-4">
            GET IN CONTACT
          </button>
        )} */}

        <div className={`flex flex-row gap-4 ${isMobileOrTablet && "mt-6"}`}>
          <a>
            <Image
              className="cursor-pointer"
              width={40}
              alt="instagram"
              src={instagramImage}
              loading="lazy"
            />
          </a>

          <Image
            className="cursor-pointer"
            width={40}
            alt="facebook"
            src={facebookImage}
            loading="lazy"
          />
          <Image
            className="cursor-pointer"
            width={40}
            alt="linkedIn"
            src={linkedInImage}
            loading="lazy"
          />
          <Image
            className="cursor-pointer"
            width={40}
            alt="twitter"
            src={twitterImage}
            loading="lazy"
          />
        </div>
      </div>
      <div
        className={`w-full border-t-2 border-spcaing-1 ${
          isMobileOrTablet
            ? "border-black mt-10 mb-10"
            : "border-white mt-20 mb-10"
        }   `}
      ></div>

      <div className="flex flex-row justify-between">
        <div>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className={`${
                  isMobileOrTablet
                    ? " text-black hover:text-black"
                    : "text-white hover:text-white"
                } cursor-pointer underline hover:no-underline `}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isMobileOrTablet
                    ? " text-black hover:text-black"
                    : "text-white hover:text-white"
                } cursor-pointer underline hover:no-underline `}
              >
                Cookie Notice
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  isMobileOrTablet
                    ? " text-black hover:text-black"
                    : "text-white hover:text-white"
                } cursor-pointer underline hover:no-underline `}
              >
                Locations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mt-[63px]">
            <p className="text-xs font-semibold text-black">
              ©2024 Mosb Digital LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
