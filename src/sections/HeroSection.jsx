import React, { useEffect } from "react";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

function HeroSection() {
  // get location
  const loc = useLocation();
  const url = loc.pathname;

  // animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigatePreview = () => {
    navigate("/preview");
  };

  const navigateEdit = () => {
    navigate("/");
  };

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(1));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div
      //   onClick={sidebarCall}
      className="relative w-full mx-auto md:px-24 px-4 md:py-56 py-24 bg-hero-img bg-cover bg-center"
      ref={ref}
    >
      {url === "/" && (
        <button
          onClick={sidebarCall}
          className="absolute top-4 right-4 md:p-4 p-3 md:text-medium text-sm rounded-md md:m-2 shadow-white-3 text-red-primary bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent  hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
        >
          Edit
        </button>
      )}

      <div className="max-w-[540px] flex flex-col gap-4 text-white">
        <h1
          className="text-4xl font-bold text-metal-black"
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          {Data.Hero.heading}
        </h1>
        <p
          className="text-para-black"
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {Data.Hero.paragraph}
        </p>
        <div
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
        >
          <button className="md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-md bg-gradient-to-tl from-body-color to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white">
            Join Community
          </button>
          <button
            onClick={url === "/" ? navigatePreview : navigateEdit}
            className="md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-md bg-gradient-to-tl from-body-color to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
          >
            {url === "/" ? "Preview" : "Back To Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
