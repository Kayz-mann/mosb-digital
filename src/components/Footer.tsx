import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React from "react";
import Image from "next/image";
import SmallLogoIcon from "./svgs/SmallLogoIcon";

import instagramImage from "../../public/assets/images/instagram.png";
import facebookImage from "../../public/assets/images/facebook.png";
import linkedInImage from "../../public/assets/images/linkedIn.png";
import twitterImage from "../../public/assets/images/twitter.png";

const Footer = () => {
  const isMobileOrTablet = useMobileOrTablet(900);

  return (
    <div
      className={`h-screen/2 w-screen bg-[#FAB005] pb-20 ${
        isMobileOrTablet ? "px-6" : "px-28"
      }`}
    >
      <div
        className={`pt-24 flex  justify-between  ${
          isMobileOrTablet
            ? "flex-col gap-4 justify-start"
            : "flex-row items-center"
        }`}
      >
        <div className="flex flex-row">
          <SmallLogoIcon />
          <p className="text-xl font-semibold">Mosb Digital</p>
        </div>

        {isMobileOrTablet && (
          <button className="border-black border-2 rounded-lg px-2 py-2 cursor-pointer mb-4">
            GET IN CONTACT
          </button>
        )}

        <div>
          <p className="text-base font-semibold text-black">
            ©2024 Mosb Digital LLC
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <a>
            <Image
              className="cursor-pointer"
              width={40}
              alt="instagram"
              src={instagramImage}
            />
          </a>

          <Image
            className="cursor-pointer"
            width={40}
            alt="facebook"
            src={facebookImage}
          />
          <Image
            className="cursor-pointer"
            width={40}
            alt="linkedIn"
            src={linkedInImage}
          />
          <Image
            className="cursor-pointer"
            width={40}
            alt="twitter"
            src={twitterImage}
          />
        </div>
      </div>
      <div className="w-full border-t-2 border-spcaing-1 border-white mt-20 mb-10 "></div>

      <div className="flex flex-row justify-between">
        <div>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="text-white cursor-pointer underline hover:no-underline hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white cursor-pointer underline hover:no-underline hover:text-white"
              >
                Cookie Notice
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white cursor-pointer underline hover:no-underline hover:text-white"
              >
                Locations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-semibold text-white">Want to talk?</p>

          <li className="list-none">
            <a
              href="#"
              className="text-white text-base cursor-pointer underline hover:no-underline hover:text-white list-none"
            >
              Get in contact with us
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;