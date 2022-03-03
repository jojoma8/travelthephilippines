import React from "react";
import ExploreCard from "./ExploreCard";

function MainPageExplore() {
  return (
    <div className="m-10">
      {/* top */}
      <div>
        <div className="text-5xl font-semibold">Explore the Philippines</div>
      </div>
      {/* body */}
      <div>
        {/* attractions */}
        <div>
          {/* selector */}
          <div></div>
          {/* attractions list */}
          <div>
            <ExploreCard
              title={"Coron Island"}
              text={
                "This island, only a 20-minute bangka ride from Coron town, has an imposing, mysterious skyline that wouldn’t be out of place in a King Kong film. Flying over Coron, you see that the fortresslike, jungle-clad interior is largely inaccessible terrain pockmarked with lakes, two of which, Kayangan Lake and Barracuda Lake, can be visited. The entire island is the ancestral domain of the Tagbanua indigenous group, who are primarily fishers and gatherers of the very lucrative balinsasayaw (birds' nests)."
              }
              imageURL={
                "https://lp-cms-production.imgix.net/2020-11/40132be54d3e1becd3298784bac6e8dd-coron-island.jpg?fit=crop&q=40&auto=format&w=100&h=100&w=100&h=100&dpr=1"
              }
            />
            <ExploreCard
              title={"Nacpan Beach"}
              text={
                "For an easy day trip out of El Nido, head north by tricycle or motorbike to this incredible, golden-hued, 3km-long beach. Development has arrived in Nacpan and new guesthouses, boutique hotels and upscale tented camps are popping up everywhere. Still, the atmosphere remains mellow – for now. To get here, drive 16km north of El Nido on the National Hwy (paved), then another 4km down a once-rough access road that is now mostly sealed. There's a shuttle van from El Nido (round-trip P600, eight trips daily)."
              }
              imageURL={
                "https://lp-cms-production.imgix.net/2020-11/7496cc836f9eab5061617d12bdea7735-nacpan-beach.jpg?fit=crop&q=40&auto=format&w=100&h=100&w=100&h=100&dpr=1"
              }
            />
            <ExploreCard
              title={"Miniloc Island"}
              text={
                "Miniloc Island is perhaps the most interesting of the archipelago's islands. The main attractions are Big Lagoon, Small Lagoon and Secret Lagoon, three of the more photographed sights in all of Palawan. Big Lagoon is entered by an extremely shallow channel (you may have to swim into the lagoon and leave the boat outside). Inside, surrounded by jungle-clad karst walls, is an enormous natural swimming hole."
              }
              imageURL={
                "https://lp-cms-production.imgix.net/2020-11/e6c326e92bf6dbe23db4a77a61462669-miniloc-island.jpg?fit=crop&q=40&auto=format&w=100&h=100&w=100&h=100&dpr=1"
              }
            />
            <ExploreCard
              title={"Duli Beach"}
              text={
                "This incredibly beautiful, jungle-backed, stretch of golden sand toward the northern tip of mainland Palawan is the centre of El Nido's surfing community. The season is November to March and board rental is available (P500 per hour) at a couple of places, including idyllic Duli Beach Resort. To get here turn off the off the National Hwy around the Km 294 marker and continue 3.5km on a rough but improving road that ends in a slippery single track to the beach proper."
              }
              imageURL={
                "https://lp-cms-production.imgix.net/2020-11/0182c45a33225904b9a22f5c955e07ac-duli-beach.jpg?fit=crop&q=40&auto=format&w=100&h=100&w=100&h=100&dpr=1"
              }
            />
          </div>
        </div>
        {/* map */}
        <div></div>
      </div>
    </div>
  );
}

export default MainPageExplore;
