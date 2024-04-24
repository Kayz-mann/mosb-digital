/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ArticleCard from "@/components/blogs/ArticleCard";
import blogImage from "../../../public/assets/images/blogImage.png";
import Image from "next/image";
import Quotes from "@/components/svgs/Quotes";

const View = ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.id);

  return (
    <div
      className={`h-full w-full bg-[#fff] 
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
      </div>

      <div className={`${isMobileOrTablet ? "px-6" : "px-32"} mt-4 `}>
        <Link
          href="/blog"
          className="flex flex-row gap-1 items-center cursor-pointer"
        >
          <ArrowLeftIcon color="gray" height={20} />
          <p className="text-lg underline text-gray-500">Back</p>
        </Link>

        <div className="mt-8">
          <div
            className={`flex ${
              isMobileOrTablet
                ? "flex-col justify-start items-left"
                : "flex-row"
            } gap-2 items-center`}
          >
            <button className="bg-[#fff] py-2 px-4 rounded-full shadow-md cursor-not-allowed ">
              <p
                style={{ fontSize: "10px", width: "80px" }}
                className="text-[#FAB005] text-center font-bold"
              >
                Tech
              </p>
            </button>

            <p
              className={`${
                isMobileOrTablet ? "text-xs" : "text-lg"
              } font-bold uppercase text-gray-600`}
            >
              JAN 20TH 2024
            </p>
          </div>

          <h1
            className={`${
              isMobileOrTablet ? "text-3xl" : "text-5xl"
            } text-black font-bold mt-8 text-left`}
            style={{ width: isMobileOrTablet ? "100%" : "80%" }}
          >
            Mosb Digital core business -brand consultancy and digital marketing
          </h1>

          <div className="mt-8 flex flex-row items-center gap-2">
            <Image
              alt="blog"
              src={blogImage}
              width={isMobileOrTablet ? 64 : 64}
              height={64}
              loading="lazy"
              quality={75}
              className="rounded-full"
              objectFit="cover"
              style={{ borderRadius: "50%", width: "64px", height: "64px" }}
            />

            <div>
              <p className="font-bold text-base text-black">
                Firstname Lastname
              </p>
              <p className="font-light text-base text-gray-400">
                Position @ Company
              </p>
            </div>
          </div>

          <div className="mt-8 items-center w-full justify-center">
            <Image
              alt="blog"
              src={blogImage}
              width={1026}
              height={626}
              loading="lazy"
              quality={75}
              objectFit="cover"
              style={{ width: "100%", height: "40%", alignItems: "center" }}
            />
          </div>

          {/* headline */}
          <div className="mt-4">
            <p
              className="text-base font-bold text-black"
              style={{
                fontFamily: "Merriweather",
              }}
            >
              By meticulously crafting brand strategies, Mosb Digital ensure
              that every interaction a customer has with a brand is purposeful
              and leaves a lasting impression. From establishing brand
              guidelines to developing a constant tone across all channels, Mosb
              digital helps businesses create a cohesive and compelling brand
              narrative.
            </p>

            <p
              className="text-base font-normal text-gray-700 mt-8"
              style={{
                fontFamily: "Merriweather",
              }}
            >
              What sets Mosb Digital apart is its commitment to innovation. In a
              rapidly evolving digital landscape, staying ahead of the curve is
              crucial. Mosb Digital doesn’t just follow trends; it sets them.
              From immersive storytelling through interactive content to
              harnessing the power of data analytics for informed
              decision-making, Mosb Digital embraces creativity and technology
              to deliver unparalleled results. The success of Mosb Digital is
              intricately woven with the success of its clients. The agency
              adopts a client-centric approach, considering each collaboration
              as a partnership. Through transparent communication, strategic
              planning, and a relentless pursuit of excellence, Mosb Digital
              ensures that the goals of its clients are not just met but
              exceeded.
            </p>
          </div>

          {/* quotes */}
          <div className="bg-[#F3F3F3] px-6 py-8 rounded-md mt-4">
            {/* <p className="text-4xl text-gray-700"></p> */}
            <Quotes />

            <p
              className="mt-2 text-3xl text-gray-500 italic"
              style={{
                fontFamily: "Merriweather",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              In the symphony of business, Mosb Digital conducts a harmonious
              blend of brand consultancy and digital marketing, orchestrating
              success through innovative strategies that resonate in the hearts
              of audiences.
            </p>
          </div>

          {/* footer description */}
          <p
            className="text-base font-normal text-gray-700 mt-8 pb-10"
            style={{
              fontFamily: "Merriweather",
            }}
          >
            As we step into the future, Mosb Digital stands poised at the
            intersection of tradition and innovation. The core principles of
            brand consultancy and digital marketing will continue to guide its
            endeavors, shaping the narratives of businesses and leaving an
            indelible mark on the digital landscape. In the dynamic world of
            business, where change is the only constant, Mosb Digital remains a
            beacon of stability and growth. With a focus on building powerful
            brands and executing effective digital strategies, Mosb Digital is
            not just a service provider; it is a partner in the journey of
            success for businesses ready to embrace the limitless potential of
            the digital age.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default View;
