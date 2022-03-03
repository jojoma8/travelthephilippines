import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
// import { useDimensions } from "../utils/useDimensions";

function MainPageTop() {
  const [readMoreToggle, setReadMoreToggle] = useState(false);
  const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  const handleToggle = () => {
    setReadMoreToggle(!readMoreToggle);
  };

  const readMoreBlock = {
    open: (height = 1000) => ({
      // clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      // clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div>
      <div className="relative ">
        <Image
          className=" "
          src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          width={1374}
          height={1031}
          layout="responsive"
          objectFit="cover"
          alt="El Nido"
          // quality="100"
          priority
        />
        <div className="">
          <div className="absolute -bottom-68 md:bottom-28 text-4xl left-20 text-gray-800 font-semibold z-50 ">
            Travel the
          </div>
          <div
            className="bg-white absolute z-40 -bottom-40 md:bottom-0  text-8xl text-blue-700 
        pt-16 pr-20 pl-10 pb-5 font-extrabold "
          >
            Philippines
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between mt-40 ml-10 md:m-10 ">
          <div className="md:max-w-lg">
            <p className="text-2xl sm:text-4xl font-light tracking-wider ">
              The Philippines is defined by its emerald rice fields, teeming
              megacities, graffiti-splashed jeepneys, smouldering volcanoes,
              bug-eyed tarsiers, fuzzy water buffalo and smiling, happy-go-lucky
              people.
            </p>
            <AnimatePresence>
              {readMoreToggle && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  // custom={height}
                  // ref={containerRef}
                  // className={readMoreToggle ? "hidden" : ""}
                >
                  <h2 className="my-10 font-semibold text-xl">
                    Island-Hopping Paradise
                  </h2>
                  <p className="text-sm font-light text-gray-700 tracking-wider leading-7">
                    With more than 7000 tropical islands to choose from, the
                    Philippines is a beach bum&apos;s delight. There&apos;s an
                    island to suit every taste, from marooned slicks of sand in
                    the middle of the ocean, to volcanic fantasy-scapes
                    concealing hidden lagoons, to sprawling mega-islands such as
                    Luzon and Mindanao. Sun worshippers and divers should head
                    straight to the Visayas, where island-hopping opportunities
                    abound and the perfect beach takes many forms. More
                    adventurous travelers can pitch a tent on a deserted stretch
                    of coastline in Palawan and play solo <em>Survivor</em> for
                    a few days.
                  </p>
                  <h2 className="my-10 font-semibold text-xl">
                    The Great Outdoors
                  </h2>
                  <p className="text-sm font-light text-gray-700 tracking-wider leading-7">
                    The Philippines is justifiably famous for its beaches, but
                    sporty types need not feel left out. While surfers are just
                    catching on to the tasty (if fickle) waves that form on both
                    coasts, divers have long been enamoured of the country’s
                    underwater charms. Northern Palawan is perfect for sea
                    kayakers, and Boracay and Pagudpud (North Luzon) are
                    world-class kiteboarding destinations. Back on terra firma,
                    trekking can be done just about anywhere, while
                    mountain-bike and canyoneering tours are gaining popularity.
                    And the Philippines is also, unofficially, the zipline
                    capital of the world.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              className="text-blue-700 font-semibold mt-5"
              onClick={() => handleToggle()}
            >
              Read More {readMoreToggle ? "hello" : "there"}
            </button>
          </div>
          <div className="hidden md:inline-flex">TOC</div>
        </div>
      </div>
    </div>
  );
}

export default MainPageTop;
