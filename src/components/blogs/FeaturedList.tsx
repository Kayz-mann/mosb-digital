import React, { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";

import useApolloBlog from "@/app/hooks/useApolloBlog";

const FeaturedList = () => {
  const isMobile = useMobileOrTablet(768);
  const { data: wpData } = useApolloBlog(); // Use useApolloBlog hook to fetch data
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<any[]>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const cardWidth = "299px"; // Width of the CategoryCard

  useEffect(() => {
    if (wpData) {
      const categoryItems: any[] = wpData.map((item: any) => {
        return {
          id: item.id,
          title: item.blog.title,
          headline: item.blog.headline,
          image: item.blog.image,
        };
      });
      setItems(categoryItems);
    }
  }, [wpData]);

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const getFullImageUrl = (uri: any) =>
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}${uri}`;

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={containerRef}
        style={{
          overflowX: "auto",
          display: "flex",
          scrollBehavior: "smooth",
        }}
      >
        {items.map((item: any) => (
          <div
            key={item.id}
            style={{ flex: "0 0 auto", margin: "0 8px", width: cardWidth }}
            className="mr-4 mb-4"
          >
            <Link
              href={{
                pathname: "/view",
                query: {
                  id: item.id,
                },
              }}
            >
              <CategoryCard
                image={getFullImageUrl(item.image?.node?.uri)}
                title={item.title}
                description={item.headline as string}
                onClick={() => {}}
              />
            </Link>
          </div>
        ))}
      </div>
      {!isMobile && (
        <>
          <button
            onClick={() => handleScroll(-100)}
            className="bg-black rounded-full p-4 items-center justify-center text-white"
            style={{
              width: "32px",
              height: "32px",
              lineHeight: "32px",
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              marginTop: "2px",
            }}
          >
            <ChevronLeftIcon
              color="white"
              height={24}
              style={{ marginTop: -12, marginLeft: -12 }}
            />
          </button>
          <button
            onClick={() => handleScroll(+100)}
            className="bg-black rounded-full p-4 items-center justify-center text-white"
            style={{
              width: "32px",
              height: "32px",
              lineHeight: "32px",
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              marginTop: "2px",
            }}
          >
            <ChevronRightIcon
              color="white"
              height={24}
              style={{ marginTop: -12, marginLeft: -12 }}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default FeaturedList;
