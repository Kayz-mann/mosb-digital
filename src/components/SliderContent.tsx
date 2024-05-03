"use client";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage from "../../public/assets/images/slider-image.png";
import SliderCard from "./SliderCard";
import useBlogPosts from "@/app/hooks/useBlogPosts";
import Link from "next/link";

const SliderContent = () => {
  const isMd = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Set up interval to auto-slide every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data && data.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000); // Auto-slide every 5 seconds (5000 milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data } = useBlogPosts();

  console.log("query data", data);

  // const sliderData = [
  //   {
  //     id: 1,
  //     title: "The is a featured article - the most important piece of content",
  //     description:
  //       "Very short description of what is being discussed in this article. Maybe the first sentence to provide a preview.",
  //     image: sliderImage,
  //   },
  //   {
  //     id: 2,
  //     title: "The is a featured article - the most important piece of content",
  //     description:
  //       "Very short description of what is being discussed in this article. Maybe the first sentence to provide a preview.",
  //     image: sliderImage,
  //   },
  // ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Auto-slide every 5 seconds (5000 milliseconds)
    beforeChange: (current: any, next: React.SetStateAction<number>) =>
      setCurrentSlide(next),
  };

  return (
    <>
      {!data ? (
        <div />
      ) : (
        <div
          className={`bg-black h-screen/2 justify-between w-full flex pb-10 py-8 gap-2 ${
            isMobileOrTablet ? "px-6 flex-col" : isMd ? "px-24" : "px-48 "
          }`}
        >
          <div className="w-full pb-10 py-8">
            <Slider {...settings}>
              {data &&
                data.map(
                  (post: {
                    id: React.Key | null | any;
                    image: any;
                    title: string;
                    description: string;
                  }) => (
                    <Link
                      href={{
                        pathname: "/view",
                        query: {
                          id: post.id,
                        },
                      }}
                      key={post.id}
                    >
                      <SliderCard
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        href={{ pathname: "/view", query: { id: post.id } }}
                      />
                    </Link>
                  )
                )}

              <div />
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderContent;
