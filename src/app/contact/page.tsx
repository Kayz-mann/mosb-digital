/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import TopContent from "@/components/TopContent";
import BottomContent from "@/components/BottomContent";
import ContactLine from "@/components/ContactLine";

const Contact = ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const isTablet = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.id);

  return (
    <div
      className={`h-full w-full bg-[#000] 
    `}
    >
      <div
        className={`mx-auto ${isMobileOrTablet ? "py-0" : "py-8"} ${
          isMobileOrTablet ? "w-full" : "w-4/5"
        }`}
      >
        <Navigation
          bgColor={`${isMobileOrTablet ? "bg-white" : "bg-[#FAB005]"}`}
        />

        {/* <div
          className="flex flex-row justify-between mt-10  "
          style={{ width: "80%" }}
        >
          <p
            style={{ lineHeight: 1.0 }}
            className={`${"text-white flex flex-row"} ${
              isMobileOrTablet
                ? "text-xl justify-left text-left font-semibold"
                : isTablet
                ? "text-2xl"
                : "text-3xl"
            }`}
          >
            Atlanta
          </p>

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
                Find Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isMobileOrTablet
                    ? " text-black hover:text-black"
                    : "text-white hover:text-white text-xs"
                }  `}
              >
                30 Satelite Blvd
                <br />
                Durluth, GA. 30096
              </a>
            </li>
          </ul>

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
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isMobileOrTablet
                    ? " text-black hover:text-black"
                    : "text-white hover:text-white text-xs"
                }  `}
              >
                Email: Info@mosbdigital.com
                <br />
                Tel: (1) 404-551-7978
              </a>
            </li>
          </ul>
        </div> */}

        <ContactLine
          country={"Atlanta"}
          firstTitle={"Find Us"}
          secondTitle="Contact"
          phoneAddress={"Email: Info@mosbdigital.com\nTel: (1) 404-551-7978"}
          address={"30 Satelite Blvd\nDurluth, GA. 30096"}
        />

        <div className="flex flex-row justify-between mt-10 border-b-2 border-white " />

        <ContactLine
          country={"Lagos"}
          firstTitle={"Find Us"}
          secondTitle="Contact"
          phoneAddress={"Email: Info@mosbdigital.com\nTel: +234 810 9333 263"}
          address={"75b Ogunnusi Rd,\nIsheri 101233"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
