"use client";
import React from "react";
import useMobileOrTablet from "../hooks/useMobileOrTablet";
import Navigation from "@/components/Navigation";
import CustomButton from "@/components/module/CustomButton";
import Image from "next/image";
import blogImage from "../../../public/assets/images/blogImage.png";
import BlogBanner from "@/components/blogs/BlogBanner";
import CategoryList from "@/components/blogs/CategoryList";
import Footer from "@/components/Footer";
import Link from "next/link";
import useScroll from "../hooks/useScroll";
import useApolloBlog from "../hooks/useApolloBlog";

const BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

const Blog = () => {
  const isScrolled = useScroll();
  const isMobileOrTablet = useMobileOrTablet(900);
  const { data: wp, loading, error } = useApolloBlog();

  console.log("WP", wp);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const firstBlog = wp[0]?.blogFields;

  console.log("First Blog:", firstBlog);
  console.log("First Blog Title:", firstBlog?.title);

  const getFullImageUrl = (uri: any) => (uri ? `${BASE_URL}${uri}` : blogImage);

  return (
    <div className={`h-full w-full bg-[#F3F3F3]`}>
      <div
        className={`ease-in-out transition-padding duration-500 pb-28 ${
          isScrolled ? "py-14" : "py-0"
        } ${isMobileOrTablet ? "w-full" : "w-4/5"}`}
        style={{
          scrollBehavior: "smooth",
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

      <div className={`${isMobileOrTablet ? "px-2 " : "px-32 "} `}>
        <h1 className="text-4xl font-bold">Blog</h1>

        {wp && wp.length > 0 ? (
          <Link
            href={{
              pathname: "/view",
              query: {
                id: wp[0]?.id,
              },
            }}
          >
            <BlogBanner
              title={
                // <div dangerouslySetInnerHTML={{ __html: firstBlog?.title }} />
                firstBlog?.title
              }
              description={firstBlog?.headline}
              image={getFullImageUrl(firstBlog?.image?.node?.uri)}
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
