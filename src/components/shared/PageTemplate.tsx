"use client";

import { useEffect, useState } from "react";
import useApolloBlog from "@/app/hooks/useApolloBlog";
import useScroll from "@/app/hooks/useScroll";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { Jelly } from "@uiball/loaders";
import moment from "moment";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import blogImage from "../../../public/assets/images/blogImage.png";
import Image from "next/image";
import Quotes from "@/components/svgs/Quotes";
import FeaturedList from "@/components/blogs/FeaturedList";
import Head from "next/head";

interface PageTemplateProps {
  id: string;
}

export const PageTemplate = ({ id }: PageTemplateProps) => {
  const isScrolled = useScroll();
  const [blogPost, setBlogPost] = useState<any>(null);
  const isMobileOrTablet = useMobileOrTablet(900);

  const { data: wp, loading, error } = useApolloBlog();

  const getFullImageUrl = (uri: any) =>
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${uri}`;

  useEffect(() => {
    if (!wp || loading || error) return;

    const post = wp.find((post: any) => post.id === id);

    if (post) {
      setBlogPost(post.blog);
    }
  }, [wp, loading, error, id, blogPost]);

  if (loading || !blogPost) {
    return (
      <div
        className="flex w-full items-center justify-center p-18 text-xl mt-98 h-full"
        style={{ display: "grid", placeItems: "center", marginTop: 400 }}
      >
        <Jelly size={80} color="#FAB005" />
      </div>
    );
  }

  return (
    <div className={`h-full w-full bg-[#fff] ${isScrolled ? "py-14" : "py-0"}`}>
      <Head>
        <meta property="og:url" content={window.location.href} />
      </Head>
      <div
        className={`ease-in-out transition-padding duration-500 pb-28 ${
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
            <button
              type="button"
              className="bg-[#fff] py-2 px-4 rounded-full shadow-md cursor-not-allowed "
            >
              <p
                style={{ fontSize: "10px", width: "80px" }}
                className="text-[#FAB005] text-center font-bold"
              >
                {blogPost.category}
              </p>
            </button>

            <p
              className={`${
                isMobileOrTablet ? "text-xs" : "text-lg"
              } font-bold uppercase text-gray-600`}
            >
              {moment(blogPost.createdAt).format("MMMM Do YYYY, h:mm a")}
            </p>
          </div>
          {/* section */}
          {blogPost.title && (
            <h1
              className={`${
                isMobileOrTablet ? "text-3xl" : "text-5xl"
              } text-black font-bold mt-8 text-left`}
              style={{ width: isMobileOrTablet ? "100%" : "80%" }}
              dangerouslySetInnerHTML={{ __html: blogPost.title }}
            />
          )}

          {/* Other content goes here */}

          <div className="mt-8 flex flex-row items-center gap-2">
            <Image
              alt="blog"
              src={getFullImageUrl(blogPost.authorimage?.node.uri) || blogImage}
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
                {blogPost.authorname}
              </p>
              <p className="font-light text-base text-gray-400">
                {blogPost.authorjobrole} @ {blogPost.companyname}
              </p>
            </div>
          </div>

          {blogPost.image && (
            <div className="mt-8 items-center w-full justify-center">
              <Image
                alt="blog"
                src={getFullImageUrl(blogPost.image?.node.uri)}
                width={1024}
                height={600}
                loading="lazy"
                quality={75}
                objectFit="cover"
              />
            </div>
          )}

          {/* Other blog content */}
          <div className="mt-4">
            {blogPost.headline && (
              <p
                className="text-base font-bold text-black"
                style={{
                  fontFamily: "Merriweather",
                }}
                dangerouslySetInnerHTML={{ __html: blogPost.headline }}
              />
            )}

            {blogPost.description && (
              <p
                className="text-base font-normal text-gray-700 mt-8"
                style={{
                  fontFamily: "Merriweather",
                }}
                dangerouslySetInnerHTML={{ __html: blogPost.description }}
              />
            )}
          </div>

          {/* quotes */}
          {blogPost.quote && (
            <div className="bg-[#F3F3F3] px-6 py-8 rounded-md mt-4">
              <Quotes />

              <p
                className="mt-2 text-3xl text-gray-500 italic"
                style={{
                  fontFamily: "Merriweather",
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
                dangerouslySetInnerHTML={{ __html: blogPost.quote }}
              />
              <p
                className="mt-2 text-sm text-gray-500 italic"
                style={{
                  fontFamily: "Merriweather",
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
              >
                {blogPost.quoteauthor}
              </p>
            </div>
          )}

          {/* footer description */}
          {blogPost.footerdescription && (
            <p
              className="text-base font-normal text-gray-700 mt-8 pb-10"
              style={{ fontFamily: "Merriweather" }}
              dangerouslySetInnerHTML={{ __html: blogPost.footerdescription }}
            />
          )}
        </div>
      </div>

      <div
        className={`bg-[#F3F3F3] mt-4 w-full items-center py-20  ${
          isMobileOrTablet ? "px-2" : "px-20"
        }`}
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
