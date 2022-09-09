import React from "react";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

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
      style={{
        backgroundImage: `url(${Data.Hero.image})`,
      }}
      className="relative w-full mx-auto  px-4 md:px-12 md:py-56 py-24 bg-cover bg-center"
      ref={ref}
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

      <div className="container mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
