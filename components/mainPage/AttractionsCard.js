import React from "react";
import Image from "next/image";

function AttractionsCard({ title, text, imageURL, data }) {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-xs
        mt-4 p-4 rounded-3xl shadow-lg "
      onClick={() => onSelectCity(data)}
    >
      {/* title */}
      <h2 className="text-2xl font-bold text-blue-700 tracking-wide pb-3">
        {title}
      </h2>
      {/* photo */}
      <div
        className="flex basis-1/4 flex-row items-center justify-center 
        rounded-2xl overflow-hidden "
      >
        <Image src={imageURL} height={100} width={100} alt={text} />
      </div>
      {/* text */}
      <div className="flex basis-3/4 flex-col items-start pl-4 ">
        {/* description */}
        <p
          className="text-gray-700 text-sm tracking-wide 
             line-clamp-10  "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default AttractionsCard;
