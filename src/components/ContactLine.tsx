import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { count } from "console";
import React from "react";

interface ContactProps {
  country: string;
  firstTitle: string;
  secondTitle: string;
  address: string;
  phoneAddress: string;
}

const ContactLine = ({
  phoneAddress,
  address,
  firstTitle,
  secondTitle,
  country,
}: ContactProps) => {
  const isTablet = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);

  const lines = address.split("\n");
  const secondLine = (phoneAddress || "").split("\n");

  return (
    <div
      className={`flex ${
        isMobileOrTablet ? "flex-col py-10" : "flex-row justify-between py-20"
      }  `}
      style={{ width: "80%" }}
    >
      <p
        style={{ lineHeight: 1.0 }}
        className={`${"flex flex-row"} ${
          isMobileOrTablet
            ? " text-black text-xl justify-left text-left font-semibold"
            : isTablet
              ? "text-2xl text-white text"
              : "text-3xl text-white "
        }`}
      >
        {country}
      </p>

      <ul className="space-y-1">
        {!isMobileOrTablet && (
          <li>
            <a
              href="#"
              className={`${
                isMobileOrTablet
                  ? " text-black hover:text-black"
                  : "text-white hover:text-white"
              } cursor-pointer underline hover:no-underline `}
            >
              {firstTitle}
            </a>
          </li>
        )}
        <li className={`${isMobileOrTablet ? "mt-2" : "mt-0"}`}>
          {lines.map((line, index) => (
            <p
              key={index}
              className={`${
                isMobileOrTablet
                  ? " text-black hover:text-black text-sm font-light"
                  : "text-white hover:text-white text-xs"
              }  `}
            >
              {line}
            </p>
          ))}
        </li>
      </ul>

      <ul>
        {!isMobileOrTablet && (
          <li>
            <a
              href="#"
              className={`${
                isMobileOrTablet
                  ? " text-black hover:text-black text-sm"
                  : "text-white hover:text-white"
              } cursor-pointer underline hover:no-underline `}
            >
              {secondTitle}
            </a>
          </li>
        )}
        <li>
          {secondLine.map((line, index) => (
            <p
              key={index}
              className={`${
                isMobileOrTablet
                  ? " text-black hover:text-black text-sm font-light"
                  : "text-white hover:text-white text-xs"
              }  `}
            >
              {line}
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ContactLine;
