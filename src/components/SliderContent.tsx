import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage from "../../public/assets/images/slider-image.png";
import SliderCard from "./SliderCard";

const SliderContent = () => {
  const isMd = useMobileOrTablet(1024);
  const isMobileOrTablet = useMobileOrTablet(900);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Set up interval to auto-slide every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000); // Auto-slide every 5 seconds (5000 milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const sliderData = [
    {
      id: 1,
      title: "The is a featured article - the most important piece of content",
      description:
        "Very short description of what is being discussed in this article. Maybe the first sentence to provide a preview.",
      image: sliderImage,
    },
    {
      id: 2,
      title: "The is a featured article - the most important piece of content",
      description:
        "Very short description of what is being discussed in this article. Maybe the first sentence to provide a preview.",
      image: sliderImage,
    },
  ];

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
    <div
      className={`bg-black h-screen/2 justify-between w-full flex pb-10 py-8 gap-2 ${
        isMobileOrTablet ? "px-6 flex-col" : isMd ? "px-24" : "px-48 "
      }`}
    >
      <div className="w-full pb-10 py-8">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } transition-opacity duration-500`}
            >
              <SliderCard
                id={item.id as unknown as string}
                image={item.image}
                title={item.title}
                description={item.description}
                href={{
                  pathname: "/view",
                  query: {
                    id: item.id,
                  },
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderContent;
