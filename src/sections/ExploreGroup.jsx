import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupCard from "../components/GroupCard";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

function ExploreGroup() {
  // get location
  const loc = useLocation();
  const url = loc.pathname;

  // animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const [groupCards, setGroupCards] = useState([]);
  const dispatch = useDispatch();

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(3));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  useEffect(() => {
    setGroupCards([...Data.ExploreGroup]);
  }, [Data]);

  //   console.log(groupCards);

  return (
    <div className="w-full relative py-8" ref={ref}>
      {url === "/" && (
        <button
          onClick={sidebarCall}
          className="absolute top-4 right-4 group md:p-4 p-3 text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary hover:-translate-y-1  hover:text-white"
        >
          Edit
        </button>
      )}

      <div className="p-8 md:p-24 max-w-[1280px] mx-auto">
        <h1
          className="md:text-5xl text-4xl font-bold text-center text-metal-black"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Explore Groups
        </h1>
        {/* <!-- Group cards --> */}
        <div
          className="mt-12 grid grid-cols-1 mx-auto md:grid-cols-3 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
          }}
        >
          {groupCards.map((curElem) => {
            return (
              <GroupCard
                key={curElem.key}
                groupName={curElem.groupName}
                groupDesc={curElem.groupDesc}
                imgPath={curElem.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExploreGroup;
