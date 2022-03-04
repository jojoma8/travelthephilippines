import React from "react";
import { content } from "../Content";
import AttractionsCard from "./AttractionsCard";
import ExploreCard from "./ExploreCard";

function MainPageAttractions() {
  return (
    <div className="m-5 md:m-10">
      <div>
        <div
          className="text-3xl  font-semibold 
            md:text-5xl md:pb-5"
        >
          Top Attractions
        </div>
      </div>
      {/* body */}
      <div className="flex flex-row items-start ">
        {/* attractions */}
        <div className="">
          {/* selector */}
          <div></div>
          {/* attractions list */}
          <div className="md:grid-cols-4 md:grid md:gap-5">
            {content.attractions.map((data, index) => {
              return (
                <AttractionsCard
                  key={index}
                  title={data.title}
                  text={data.exploreText}
                  imageURL={data.imageURL}
                  data={data}
                />
              );
            })}
          </div>
        </div>
        {/* map */}
      </div>
    </div>
  );
}

export default MainPageAttractions;
