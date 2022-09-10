import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestimonialCard from "../components/TestimonialCard";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Testimonial = () => {
  // get location
  const loc = useLocation();
  const url = loc.pathname;

  // animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);

  const [slides, setSlides] = useState([...Data.Testimonials]);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    let ind = index >= slides.length - 1 ? 0 : index + 1;
    setIndex(ind);
    var temp = slides.map((data, indi) => {
      if (indi === ind) {
        return {
          ...data,
          ["opc"]: "100",
        };
      }
      return {
        ...data,
        ["opc"]: "0",
      };
    });

    setSlides(temp);
  };

  const goBack = () => {
    let ind = index <= 0 ? slides.length - 1 : index - 1;
    setIndex(ind);
    var temp = slides.map((data, indi) => {
      if (indi === ind) {
        return {
          ...data,
          ["opc"]: "100",
        };
      }
      return {
        ...data,
        ["opc"]: "0",
      };
    });
    setSlides(temp);
  };

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(4));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  useEffect(() => {
    setSlides([...Data.Testimonials]);
  }, [Data]);

  return (
    <div
      className="relative max-w-[1280px] mx-auto border-2 border-red-800 border-solid px-5 md:px-0 pt-10 pb-10 md:pt-20 w-full flex flex-col items-center bg-body-color"
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

      <h3
        className="text-red-solid tracking-wide text-center md:text-md text-sm mb-5 font-medium font-sans"
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        WHAT COMMUNITY MEMBER SAY
      </h3>
      <h1
        className="text-metal-black text-center md:text-5xl text-4xl mb-8 font-bold"
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Testimonials
      </h1>
      <div
        className={` md:w-9/12 w-full`}
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
        }}
      >
        <div className={`display relative transition-all duration-500 ease-in`}>
          {slides.map((curElem, ind) => {
            return (
              <div key={ind}>
                <TestimonialCard
                  id={curElem.id}
                  desc={curElem.desc}
                  name={curElem.name}
                  image={curElem.image}
                  course={curElem.course}
                  rating={curElem.rating}
                  opacity={curElem.opc}
                  goNext={goNext}
                  goBack={goBack}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
