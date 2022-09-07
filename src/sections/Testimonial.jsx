import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestimonialCard from "../components/TestimonialCard";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

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

  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    let ind = index === slides.length - 1 ? 0 : index + 1;
    setIndex(ind);
    var temp = slides.map((data, indi) => {
      if (indi === ind) {
        return {
          id: data.id,
          image: data.image,
          name: data.name,
          opc: "100",
          desc: data.desc,
          course: data.course,
          rating: data.rating,
        };
      }
      return {
        id: data.id,
        image: data.image,
        name: data.name,
        opc: "0",
        desc: data.desc,
        course: data.course,
        rating: data.rating,
      };
    });
    setSlides(temp);
  };

  const goBack = () => {
    let ind = index === 0 ? slides.length - 1 : index - 1;
    setIndex(ind);
    var temp = slides.map((data, indi) => {
      if (indi === ind) {
        return {
          id: data.id,
          image: data.image,
          name: data.name,
          opc: "100",
          desc: data.desc,
          course: data.course,
          rating: data.rating,
        };
      }
      return {
        id: data.id,
        image: data.image,
        name: data.name,
        opc: "0",
        desc: data.desc,
        course: data.course,
        rating: data.rating,
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
      className="relative md:h-screen w-full flex flex-col  items-center bg-body-color"
      ref={ref}
    >
      {url === "/" && (
        <button
          onClick={sidebarCall}
          className="absolute top-4 right-4 md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in  bg-gradient-to-br from-body-color to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
        >
          Edit
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
        WHAT CLIENTS SAY
      </h3>
      <h1
        className="text-metal-black text-center md:text-5xl text-3xl mb-8 font-bold"
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Testimonials
      </h1>
      <div
        className={`cont md:w-9/12 w-full`}
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
        }}
      >
        <div className={`display relative transition-all duration-500 ease-in`}>
          {slides.map((curElem, ind) => {
            return (
              <>
                <TestimonialCard
                  key={ind}
                  desc={curElem.desc}
                  name={curElem.name}
                  image={curElem.image}
                  course={curElem.course}
                  rating={curElem.rating}
                  opacity={curElem.opc}
                  goNext={goNext}
                  goBack={goBack}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
