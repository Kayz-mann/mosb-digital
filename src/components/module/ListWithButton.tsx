import Link from "next/link";
import React from "react";

interface ListProps {
  label: string;
}

const ListWithButton = ({ label }: ListProps) => {
  return (
    <div
      className={`flex flex-row justify-between w-full items-center border-t border-b border-black py-4`}
    >
      <p className="text-xl text-black font-normal">{label}</p>
      <Link href={"/"}>
        <button>
          <p className="text-xl text-black font-normal cursor-pointer">Apply</p>
        </button>
      </Link>
    </div>
  );
};

export default ListWithButton;
