import React from "react";
import { content } from "./Content";
import ExploreCard from "./ExploreCard";

function MainPageAttractions() {
  return (
    <div className="m-10">
      <div>
        <div className="text-5xl font-semibold pb-5">Top Attractions</div>
      </div>
      {/* body */}
      <div className="flex flex-row items-start ">
        {/* attractions */}
        <div className="">
          {/* selector */}
          <div></div>
          {/* attractions list */}
          <div>
            {content.attractions.map((data) => {
              return (
                <ExploreCard
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
