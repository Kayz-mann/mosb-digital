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
import Footer from "@/components/Footer";
import useBlogPosts from "../hooks/useBlogPosts";
import Link from "next/link";

const Blog = () => {
  const isMobileOrTablet = useMobileOrTablet(900);
  const { data } = useBlogPosts();

  console.log("blog", data);

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

      <div className={`${isMobileOrTablet ? "px-2 mt-10" : "px-32 mt-24"} `}>
        <h1 className="text-4xl font-bold">Blog</h1>

        {data && data.length >= 1 ? (
          <Link
            href={{
              pathname: "/view",
              query: {
                id: data[0].id,
              },
            }}
          >
            <BlogBanner
              title={data[0].title}
              description={data[0].description}
              image={data[0].image}
              onButtonClick={() => {}}
            />
          </Link>
        ) : (
          <BlogBanner
            title="Mosb Digital- Mosb Digital is a brand design and management system."
            description="Mosb Digital is dedicated to eliminating the heavy price tag associated with brand design and management. We aim to provide entrepreneurs and startups with the same digital experience as top-tier corporations."
            image={blogImage}
            onButtonClick={() => {}}
          />
        )}

        <div className="mt-10" style={{ marginBottom: "40px" }}>
          <CategoryList />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
