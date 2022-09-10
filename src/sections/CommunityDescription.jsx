import React from "react";
import Heading1 from "../components/Heading1";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import { AiOutlineClose } from "react-icons/ai";
function CommunityDescription() {
  // get location
  const loc = useLocation();
  const url = loc.pathname;

  // animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const dispatch = useDispatch();

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(6));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div
      ref={ref}
      className="w-full shadow-lg bg-gradient-to-br relative from-gray-box to-white mx-auto flex flex-col md:flex-row justify-between items-start p-5 md:px-24 md:py-24  gap-4"
    >
      {url === "/" && (
        <button
          onClick={sidebarCall}
          className="absolute top-4 right-4 group md:p-4 p-3 text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary hover:-translate-y-1  hover:text-white"
        >
          <span className={`${showSideBar === "on" ? "hidden" : "inline"}`}>
            Edit
          </span>
          <AiOutlineClose
            className={`text-red-primary text-2xl ${
              showSideBar === "off" ? "hidden" : "block"
            }`}
          />
        </button>
      )}
      <div className="max-w-[1280px] flex flex-col md:flex-row justify-between gap-4 md:gap-0 mx-auto container">
        <div className="flex gap-4 items-start text-2xl">
          <h1
            style={{
              transform: isInView ? "none" : "translateY(150px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className="text-metal-black text-4xl flex-wrap font-bold font-mono"
          >
            {Data.CommunityDescription.heading}
          </h1>
        </div>
        <div className="text-stone-800 md:pl-0 md:w-[50%]">
          <p
            style={{
              transform: isInView ? "none" : "translateY(150px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}
          >
            {Data.CommunityDescription.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommunityDescription;
