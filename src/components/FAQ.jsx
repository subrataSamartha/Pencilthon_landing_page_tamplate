import React from "react";
import FAQCard from "./FAQCard";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const questions = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
];

function FAQ() {
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
      dispatch(setFormNo(10));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div>
      <div
        className="container mx-auto p-8 md:px-24 md:py-32 flex flex-col md:flex-row gap-10 relative"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
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

        <div className="w-full md:w-[40%]">
          <div>
            <h1 className="text-4xl font-bold">
              Frequenty Asked <br />
              Question
            </h1>
            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum facilis ad aspernatur. Quidem expedita eius molestiae
              explicabo earum!
            </p>
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
            {Data.FrequentlyAskedQuestion.map((curElem, ind) => {
              return (
                <div key={ind}>
                  <FAQCard
                    index={ind}
                    question={curElem.question}
                    answer={curElem.answer}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
