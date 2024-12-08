import React from "react";
import Link from "next/link";

const CategoryCard = ({
  category,
  itemCount,
  imgUrl,
}: {
  category: string;
  itemCount: number;
  imgUrl: string;
}) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url('${imgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[200px] h-[200px] px-8 pt-16 pb-24 overflow-hidden text-center relative text-white bg-black/40 hover:scale-105 duration-200">
        <div className="">
          <h1 className="title-font sm:text-2xl text-xl font-semibold  mb-3">
            {category}
          </h1>
          <p className="leading-relaxed mb-3 text-white">{itemCount} items</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
