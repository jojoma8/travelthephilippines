import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ExploreCard from "./ExploreCard";
import Map, { Marker, Popup, MapRef } from "react-map-gl";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";
import { content } from "./Content";
import marker from "/assets/marker.svg";

function MainPageExplore() {
  const [viewport, setViewport] = useState({
    latitude: 12,
    longitude: 122,
    // width: "100vw",
    // height: "100vh",
    zoom: 5,
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  const mapRef = useRef();

  const pins = useMemo(
    () =>
      content.attractions.map((data, index) => (
        <Marker
          key={index}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="bottom"
        >
          {/* <Pin onClick={() => setPopupInfo(data)} /> */}
          <Image
            src={marker}
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={() => setPopupInfo(data)}
          />
        </Marker>
      )),
    []
  );

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setPopupInfo(null);
      }
    };
    window.addEventListener("keydown", listener);
  }, []);

  const onSelectCity = useCallback(({ longitude = 122, latitude = 19 }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 2000,
      zoom: 9,
    });
  }, []);

  return (
    <div className="m-10">
      {/* top */}
      <div>
        <div className="text-5xl font-semibold pb-5">
          Explore the Philippines
        </div>
      </div>
      {/* body */}
      <div className="flex items-start ">
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
                  onSelectCity={onSelectCity}
                />
              );
            })}
          </div>
        </div>
        {/* map */}
        <div className="p-5 rounded-3xl ">
          <Map
            ref={mapRef}
            initialViewState={{
              longitude: 122,
              latitude: 12,
              zoom: 5,
            }}
            style={{ width: 500, height: 700 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAP_BOX}
          >
            {pins}

            {popupInfo && (
              <Popup
                anchor="bottom"
                longitude={Number(popupInfo.longitude)}
                latitude={Number(popupInfo.latitude)}
                closeOnClick={false}
                onClose={() => setPopupInfo(null)}
                // style="rounded"
              >
                <div className="flex flex-col text-blue-600 font-semibold text-lg pb-2">
                  {popupInfo.title}{" "}
                  {/* <a
                    target="_new"
                    href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.title}`}
                  >
                    Wikipedia
                  </a> */}
                </div>
                <img
                  width="100%"
                  src={popupInfo.imageURL}
                  className="rounded-3xl"
                />
              </Popup>
            )}
          </Map>
        </div>
      </div>
    </div>
  );
}

export default MainPageExplore;
