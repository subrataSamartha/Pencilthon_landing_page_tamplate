import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";

function TextHighlight() {
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
      dispatch(setFormNo(7));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div
      ref={ref}
      style={{ backgroundColor: Data.TextHighlight.color }}
      className={`h-[120px] bg-red-solid w-full relative flex items-center mx-auto text-white text-center text-2xl px-8 justify-center`}
    >
      {url === "/" && (
        <button
          onClick={sidebarCall}
          className="absolute top-4 right-4 md:p-2 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
        >
          Edit
        </button>
      )}
      <p
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        {Data.TextHighlight.heading}
      </p>
    </div>
  );
}

export default TextHighlight;
