/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import { categoryData } from "./data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import useBlogPosts from "@/app/hooks/useBlogPosts";

type GroupedCategories = {
  [category: string]: {
    items: CategoryItem[];
    scrollPosition: number;
  };
};

// Define the CategoryItem type
export type CategoryItem = {
  id: number;
  createdAt: string;
  image: any;
  authorImage?: string;
  authorName?: string;
  authorJobRole?: string;
  companyPosition?: string;
  companyName?: string;
  category: string;
  title: string;
  description: string;
  headline: string;
  quote: string;
  quoteAuthor: string;
  footerDescription: string;
};

const CategoryList = () => {
  const isMobile = useMobileOrTablet(768);
  const { data } = useBlogPosts();
  const containerRefs = useRef<{
    [category: string]: React.RefObject<HTMLDivElement | any>;
  }>({});
  const [groupedCategories, setGroupedCategories] = useState<GroupedCategories>(
    {}
  );

  useEffect(() => {
    const initialGroupedCategories: GroupedCategories = {};
    data &&
      data.forEach((item: CategoryItem) => {
        if (!initialGroupedCategories[item.category]) {
          initialGroupedCategories[item.category] = {
            items: [],
            scrollPosition: 0,
          };
        }
        initialGroupedCategories[item.category].items.push(item);
      });
    console.log("Initial Grouped Categories:", initialGroupedCategories);
    setGroupedCategories(initialGroupedCategories);
  }, [data]);

  const handleScroll = (scrollOffset: number, category: string) => {
    const container = containerRefs.current[category]?.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
      setGroupedCategories((prevGroupedCategories) => ({
        ...prevGroupedCategories,
        [category]: {
          ...(prevGroupedCategories[category] || {}),
          scrollPosition: container.scrollLeft || 0,
        },
      }));
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {Object.entries(groupedCategories).map(
        ([category, { items, scrollPosition }]) => (
          <div key={category}>
            <Link
              href={{
                pathname: "/categories",
                query: {
                  category,
                },
              }}
            >
              <p className="text-16 font-bold text-black mb-8 mt-8 ">
                {category}
              </p>
            </Link>
            <div
              style={{
                overflowX: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: items.length <= 4 ? "center" : "unset",
              }}
            >
              <div
                ref={(ref: any) =>
                  (containerRefs.current[category] = ref
                    ? ref
                    : { current: null })
                }
                style={{
                  overflowX: "auto",
                  display: "flex",
                  scrollBehavior: "smooth",
                }}
              >
                {items.map((item: CategoryItem) => (
                  <div
                    key={item.id}
                    style={{ flex: "0 0 auto", margin: "0 8px" }}
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
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        onClick={() => {}}
                      />
                    </Link>
                  </div>
                ))}
              </div>
              {!isMobile && (
                <button
                  onClick={() => handleScroll(+100, category)}
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
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CategoryList;
