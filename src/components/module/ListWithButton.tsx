import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import Link from "next/link";
import React from "react";

interface ListProps {
  label: string;
}

export const jobData = [
  "Social Media Manager",
  "Copywriter",
  "Motion Designer",
  "Graphic Designer",
  "Project Manager",
  "Virtual Assistant",
  "Front End Developer",
  "Digital Marketer",
  "UI/UX Designer",
  "Digital Brand Strategist",
  "Market Analyst",
  "Researcher",
  "PR Officer",
  "Social Media Influencer",
];

const ListWithButton = ({ label }: ListProps) => {
  const isMobileOrTablet = useMobileOrTablet(900);

  return (
    <div
      className={`flex flex-row justify-between w-full items-center border-t  border-black ${
        isMobileOrTablet ? "py-3" : "py-4"
      }`}
    >
      <p
        className={`${
          isMobileOrTablet ? "text-sm" : "text-xl"
        } text-black font-normal`}
      >
        {label}
      </p>
      <Link href={"/team"}>
        <button>
          <p
            className={`${
              isMobileOrTablet ? "text-sm" : "text-xl"
            } text-black font-normal cursor-pointer`}
          >
            Apply
          </p>
        </button>
      </Link>
    </div>
  );
};

export default ListWithButton;
