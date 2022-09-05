import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestimonialCard from "../components/TestimonialCard";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";

const Testimonial = () => {
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
    console.log("test", Data.Testimonials);
  }, [Data]);

  return (
    <div
      className="md:h-screen w-full flex justify-center bg-body-color"
      onClick={sidebarCall}
    >
      <div className={`cont md:w-9/12 w-full`}>
        <div
          className={`display relative  transition-all duration-500 ease-in`}
        >
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
