import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import SocialButton from "../components/SocialButton";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
function CommunityOwnerDetail() {
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
      dispatch(setFormNo(2));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div className="w-full relative" ref={ref}>
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

      <div
        className=" max-w-[1280px] mx-auto flex flex-col md:flex-row justify-evenly items-center p-8 md:p-24"
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="md:basis-2/6 w-full transition-transform duration-200 ease-in hover:-translate-y-1">
          <div className="p-4 shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box rounded-md ">
            <img className="rounded" src={Data.Community.image} alt="image" />
          </div>
        </div>

        <div className="md:basis-2/5 w-full md:mt-6 mt-3">
          <div className="flex flex-col gap-6">
            <div>
              <Heading1
                text={Data.Community.heading}
                size="4xl"
                weight="bold"
              />
            </div>
            <div className="text-stone-800">
              <Paragraph text={Data.Community.paragraph} />
            </div>
            {/* <!-- Social Icons --> */}
            <div
              className="flex flex-row flex-wrap justify-start gap-4 md:mt-6 mt-0"
              style={{
                transform: isInView ? "none" : "translateY(150px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
              }}
            >
              {/* <!-- twitter icon --> */}
              <button
                onClick={() => handleClick(Data.Community.facebook)}
                className="group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary "
              >
                <FaFacebookF className="text-red-primary group-hover:text-white text-2xl font-semibold" />
              </button>
              {/* <!-- instagram icon --> */}
              <button
                onClick={() => handleClick(Data.Community.twitter)}
                className="group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary "
              >
                <GrTwitter className="text-red-primary group-hover:text-white text-2xl font-semibold" />
              </button>

              {/* <!-- facebook icon --> */}
              <button
                onClick={() => handleClick(Data.Community.instagram)}
                className="group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary "
              >
                <GrInstagram className="text-red-primary group-hover:text-white text-2xl font-semibold" />
              </button>

              {/* <!-- github icon --> */}
              <button
                onClick={() => handleClick(Data.Community.linkedin)}
                className="group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary "
              >
                <FaLinkedinIn className="text-red-primary group-hover:text-white text-2xl font-semibold" />
              </button>

              {/* <!-- linkedin icon --> */}
              <button
                onClick={() => handleClick(Data.Community.github)}
                className="group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary "
              >
                <AiFillGithub className="text-red-primary group-hover:text-white text-2xl font-semibold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityOwnerDetail;
