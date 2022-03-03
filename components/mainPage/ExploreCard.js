import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function ExploreCard({ title, text, imageURL }) {
  return (
    <div
      className="flex flex-row items-center justify-center max-w-sm
        mt-4 p-4 rounded-3xl shadow-lg "
    >
      {/* photo */}
      <div
        className="flex basis-1/4 items-center justify-center 
        rounded-2xl overflow-hidden "
      >
        <Image src={imageURL} height={300} width={300} alt={text} />
      </div>
      {/* text */}
      <div className="flex basis-3/4 flex-col items-start pl-4 ">
        {/* title */}
        <h2 className="text-xl font-semibold text-blue-700 tracking-wide">
          {title}
        </h2>
        {/* description */}
        <p
          className="text-gray-700 text-sm tracking-wide 
             line-clamp-3 hover:line-clamp-none "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default ExploreCard;
