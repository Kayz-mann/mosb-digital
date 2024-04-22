"use client";
import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import CustomButton from "@/components/module/CustomButton";
import Image from "next/image";
import blogImage from "../../../public/assets/images/blogImage.png";
import { TruncatedText } from "@/components/module/TruncatedText";
import BlogBanner from "@/components/blogs/BlogBanner";
import CategoryList from "@/components/blogs/CategoryList";

const Blog = () => {
  const isMobileOrTablet = useMobileOrTablet(900);

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
        <Navigation bgColor="bg-[#FAB005]" />
      </div>

      <div className={`${isMobileOrTablet ? "px-6" : "px-48"} mt-24`}>
        <h1 className="text-4xl font-bold">Blog</h1>

        <BlogBanner
          title="Mosb Digital- Mosb Digital is a brand design and management
              system."
          description="Mosb Digital is dedicated to eliminating the heavy price tag
              associated with brand design and management. We aim to provide
              entrepreneurs and startups with the same digital experience as
              top-tier corporations."
          image={blogImage}
          onButtonClick={() => {}}
        />

        <div className="mt-10" style={{ paddingBottom: "1000px" }}>
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default Blog;
