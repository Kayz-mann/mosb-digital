"use client";
import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ArticleCard from "@/components/blogs/ArticleCard";
import { Jelly } from "@uiball/loaders";
import useScroll from "../hooks/useScroll";
import useApolloBlog from "../hooks/useApolloBlog"; // Import the useApolloBlog hook

const Categories = ({
  searchParams,
}: {
  searchParams: {
    category: string;
  };
}) => {
  const isScrolled = useScroll();
  const { data, loading, error } = useApolloBlog(); // Use useApolloBlog hook to fetch data
  const isMobileOrTablet = useMobileOrTablet(900);

  console.log("DS", data);

  return (
    <div className={`h-full w-full bg-[#F3F3F3]`}>
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

      <div className={`${isMobileOrTablet ? "px-2" : "px-32"} `}>
        <Link
          href="/blog"
          className="flex flex-row gap-1 items-center cursor-pointer pt-20"
        >
          <ArrowLeftIcon color="gray" height={20} />
          <p className="text-lg underline text-gray-500">Back</p>
        </Link>

        <div className="items center w-full font-bold text-center mt-10">
          <h1 style={{ fontSize: "32px" }}>{searchParams?.category} Blog</h1>
        </div>

        <button className="bg-[#C0BCBC] py-2 px-4 rounded-full my-12">
          <p
            style={{ fontSize: "14px", width: "80px" }}
            className="text-black text-center font-bold "
          >
            All articles
          </p>
        </button>
        <div className="mb-8 gap-12 z-50 flex flex-wrap items-center w-full justify-center">
          {loading ? (
            <div className="flex w-full items-center justify-center p-18 text-xl">
              <Jelly size={50} color="#FAB005" />
            </div>
          ) : error ? (
            <p>Error fetching data</p>
          ) : (
            data &&
            data.map((item: any, id: string | number) => (
              <Link
                href={{
                  pathname: "/view",
                  query: {
                    id: item.id,
                  },
                }}
                key={id}
              >
                <ArticleCard
                  key={id}
                  id={item.id}
                  imageSrc={item.blogFields.image.node.uri}
                  tag={searchParams.category}
                  title={item.blogFields.title}
                />
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
