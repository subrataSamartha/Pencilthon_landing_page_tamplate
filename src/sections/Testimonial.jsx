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
     className="relative md:h-screen w-full flex flex-col  items-center bg-body-color"
      
    >
      <button onClick={sidebarCall}  className="absolute top-4 right-4 md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white  ">Edit</button>
       <h1 className="text-stone-800 md:text-5xl text-3xl mb-8 font-bold">Testimonials</h1>
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
