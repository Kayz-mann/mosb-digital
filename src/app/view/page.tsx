/* eslint-disable react/no-unescaped-entities */
"use client";

import moment from "moment";
import React, { useEffect, useState } from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import blogImage from "../../../public/assets/images/blogImage.png";
import Image from "next/image";
import Quotes from "@/components/svgs/Quotes";
import useBlogPostById, { fetchBlogPostById } from "../hooks/useBlogPostById";
import { CategoryItem } from "@/components/blogs/CategoryList";
import { Jelly } from "@uiball/loaders";
import FeaturedList from "@/components/blogs/FeaturedList";
import useScroll from "../hooks/useScroll";

const View = ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const isScrolled = useScroll();
  const [data, setData] = useState<CategoryItem[]>([]);

  let blogId = searchParams.id;

  const fetchData = async () => {
    try {
      const dataInfo: CategoryItem | any = await fetchBlogPostById(blogId);
      console.log("MY DATA", data);
      setData(dataInfo);
      // Now you can use the data here
    } catch (error) {
      console.error("Error fetching blog post:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("this data", data[0]?.category);

  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.id);

  if (!data) {
    return (
      <div className="flex w-full items-center justify-center p-18 text-xl mt-98">
        <Jelly size={50} color="#FAB005" />
      </div>
    );
  }

  return (
    <div
      className={`h-full w-full bg-[#fff] 
    `}
    >
      <div
        className={`ease-in-out transition-padding duration-500 ${
          isScrolled ? "py-14" : "py-0"
        } ${isMobileOrTablet ? "w-full" : "w-4/5"}`}
        style={{
          scrollBehavior: "smooth", // Enable smooth scrolling behavior
        }}
      >
        <span
          className={`fixed left-1/2 transform -translate-x-1/2 z-50 ${
            isScrolled ? "w-[80%]" : "w-full"
          } transition-width duration-500`}
        >
          <Navigation
            isScrolled={isScrolled}
            bgColor={`${isMobileOrTablet ? "bg-white" : "bg-[#FAB005]"}`}
          />
        </span>
      </div>

      <div className={`${isMobileOrTablet ? "px-6" : "px-32"} pt-24 `}>
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
                {data[0]?.category}
              </p>
            </button>

            <p
              className={`${
                isMobileOrTablet ? "text-xs" : "text-lg"
              } font-bold uppercase text-gray-600`}
            >
              {moment(data[0]?.createdAt).format("MMMM Do YYYY, h:mm a")}
            </p>
          </div>

          {/* section */}

          {data[0]?.title && (
            <h1
              className={`${
                isMobileOrTablet ? "text-3xl" : "text-5xl"
              } text-black font-bold mt-8 text-left`}
              style={{ width: isMobileOrTablet ? "100%" : "80%" }}
            >
              {data[0]?.title}
            </h1>
          )}

          <div className="mt-8 flex flex-row items-center gap-2">
            <Image
              alt="blog"
              src={data[0]?.authorImage as any}
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
                {data[0]?.authorName}
              </p>
              <p className="font-light text-base text-gray-400">
                {data[0]?.authorJobRole} @ {data[0]?.companyName}
              </p>
            </div>
          </div>

          {data[0]?.image && (
            <div className="mt-8 items-center w-full justify-center">
              <Image
                alt="blog"
                src={data[0]?.image || blogImage}
                width={1026}
                height={626}
                loading="lazy"
                quality={75}
                objectFit="cover"
                className="rounded-md object-cover object-center md:w-full w-full md:h-[10rem] h-[10rem]"
                style={{ width: "100%", height: "40%", alignItems: "center" }}
              />
            </div>
          )}

          {/* headline */}
          <div className="mt-4">
            {data[0]?.headline && (
              <p
                className="text-base font-bold text-black"
                style={{
                  fontFamily: "Merriweather",
                }}
              >
                {data[0]?.headline}
              </p>
            )}

            {data[0]?.description && (
              <p
                className="text-base font-normal text-gray-700 mt-8"
                style={{
                  fontFamily: "Merriweather",
                }}
              >
                {data[0]?.description}
              </p>
            )}
          </div>

          {/* quotes */}
          {data[0]?.quote && (
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
                {data[0]?.quote}
              </p>
              <p
                className="mt-2 text-sm text-gray-500 italic"
                style={{
                  fontFamily: "Merriweather",
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
              >
                {data[0]?.quoteAuthor}
              </p>
            </div>
          )}

          {/* footer description */}
          {data[0]?.footerDescription && (
            <p
              className="text-base font-normal text-gray-700 mt-8 pb-10"
              style={{
                fontFamily: "Merriweather",
              }}
            >
              {data[0]?.footerDescription}
            </p>
          )}
        </div>
      </div>

      <div
        className={`bg-[#F3F3F3] mt-4 w-full items-center py-20  ${isMobileOrTablet ? "px-2" : "px-20"}`}
      >
        <p className="text-16 font-bold text-black mb-8 mt-8 px-4">
          Featured Article
        </p>
        <FeaturedList />
      </div>

      <Footer />
    </div>
  );
};

export default View;
