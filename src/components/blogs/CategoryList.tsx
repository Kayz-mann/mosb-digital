/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import { categoryData } from "./data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type GroupedCategories = {
  [category: string]: {
    items: CategoryItem[];
    scrollPosition: number;
  };
};

// Define the CategoryItem type
type CategoryItem = {
  id: number;
  category: string;
  title: string;
  description: string;
};

const CategoryList = () => {
  const [groupedCategories, setGroupedCategories] = useState<GroupedCategories>(
    () => {
      const initialGroupedCategories: GroupedCategories = {};
      categoryData.forEach((item) => {
        if (!initialGroupedCategories[item.category]) {
          initialGroupedCategories[item.category] = {
            items: [],
            scrollPosition: 0,
          };
        }
        initialGroupedCategories[item.category].items.push(item);
      });
      return initialGroupedCategories;
    }
  );

  const containerRefs = useRef<{
    [category: string]: React.RefObject<HTMLDivElement>;
  }>({});

  // Initialize container refs for each category
  Object.keys(groupedCategories).forEach((category) => {
    containerRefs.current[category] = useRef<HTMLDivElement>(null);
  });

  const handleScroll = (scrollOffset: number, category: string) => {
    const container = containerRefs.current[category]?.current;
    if (container) {
      // Smooth scroll transition
      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: "smooth",
      });

      // Update groupedCategories safely
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

            <div style={{ overflowX: "hidden", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => handleScroll(-100, category)}
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
                <div
                  ref={containerRefs.current[category]}
                  style={{
                    overflowX: "auto",
                    display: "flex",
                    scrollBehavior: "smooth", // Apply smooth scroll transition
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
                          title={item.title}
                          description={item.description}
                          onClick={() => {}}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
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
              </div>
            </div>
            {/* Display dots indicating number of items */}
            {/* <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "100%", // Adjusted to be just below the content
                transform: "translateY(-50%)",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {items.map((_, index) => (
                <span
                  key={index}
                  style={{
                    width: "9px",
                    height: "9px",
                    backgroundColor:
                      scrollPosition >= index ? "#000" : "transparent",
                    borderRadius: "50%",
                    marginRight: "18px",
                    border: "2px solid #000",
                  }}
                />
              ))}
            </div> */}
          </div>
        )
      )}
    </div>
  );
};

export default CategoryList;
