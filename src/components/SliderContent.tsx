import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import useApolloBlog from "@/app/hooks/useApolloBlog"; // Import the useApolloBlog hook
import Link from "next/link";

const SliderContent = () => {
  const isMd = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);

  const [currentSlide, setCurrentSlide] = useState(0);

  const { data, loading, error } = useApolloBlog();

  useEffect(() => {
    if (!data) return;

    // Set up interval to auto-slide every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000); // Auto-slide every 10 seconds (10000 milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [data]);

  // Log the query data
  console.log("query data", data);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

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
              {data.map((post: any) => {
                const fullImageUrl = post?.blog?.image?.node?.uri
                  ? `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${post.blog.image.node.uri}`
                  : "/path/to/default/image.jpg"; // Provide a default image or handle the error
                console.log("fullImageUrl", fullImageUrl);
                return (
                  <Link
                    href={{
                      pathname: "/view",
                      query: { id: post.id },
                    }}
                    key={post.id}
                  >
                    <SliderCard
                      id={post.id}
                      image={fullImageUrl}
                      title={post.blog.title}
                      description={post.blog.description}
                      href={{ pathname: "/view", query: { id: post.id } }}
                    />
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderContent;
