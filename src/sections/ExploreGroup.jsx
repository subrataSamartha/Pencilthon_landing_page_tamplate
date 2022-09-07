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

  return (
    <div className="w-full relative" ref={ref}>
      {url === "/" && (
        <button
          onClick={sidebarCall}
          className="absolute top-4 right-4 md:p-4 p-3 text-red-primary shadow-white-3 font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in  bg-gradient-to-br from-body-color to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
        >
          Edit
        </button>
      )}

      <div className="p-8 md:p-24 max-w-[1280px] mx-auto">
        <h1
          className="text-5xl font-bold text-center text-metal-black"
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
