"use client";
import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ArticleCard from "@/components/blogs/ArticleCard";
import { categoryData } from "@/components/blogs/data";

const Categories = ({
  searchParams,
}: {
  searchParams: {
    category: string;
  };
}) => {
  const isMobileOrTablet = useMobileOrTablet(900);
  console.log(searchParams.category);

  return (
    <div
      className={`h-full w-full bg-[#F3F3F3] 

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

      <div className={`${isMobileOrTablet ? "px-2" : "px-32"} mt-4 `}>
        <Link
          href="/blog"
          className="flex flex-row gap-1 items-center cursor-pointer"
        >
          <ArrowLeftIcon color="gray" height={20} />
          <p className="text-lg underline text-gray-500">Back</p>
        </Link>

        <div className="items center w-full font-bold text-center">
          <h1 style={{ fontSize: "32px" }}>{searchParams?.category} Blog</h1>
        </div>

        <button className="bg-[#C0BCBC] py-2 px-4 rounded-full mt-8">
          <p
            style={{ fontSize: "14px", width: "80px" }}
            className="text-black text-center font-bold"
          >
            All articles
          </p>
        </button>
        <div className="mb-96 mt-8  gap-12 z-50 flex flex-wrap items-center w-full justify-center">
          {categoryData.map((item, id) => (
            <div key={id}>
              <ArticleCard
                key={id}
                id={item.id}
                imageSrc={item.image}
                tag={searchParams.category}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
