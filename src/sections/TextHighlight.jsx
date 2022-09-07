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
      className={`py-16 mb-8 bg-red-solid w-full relative flex items-center mx-auto text-white text-center  px-8 justify-center`}
    >
      {url === "/" && (
       <button
       onClick={sidebarCall}
       className="absolute top-4 right-4 md:p-4 p-3 md:m-2 md:text-md text-sm  rounded-md  shadow-md text-red-primary bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent  hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
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

        className="md:text-3xl text-xl font-semibold"
      >
        {Data.TextHighlight.heading}
      </p>
    </div>
  );
}

export default TextHighlight;
