import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";

const TestimonialCard = ({
  id,
  name,
  desc,
  image,
  course,
  rating,
  opacity,
  goNext,
  goBack,
}) => {
  //   console.log(key);
  return (
    <>
      <div
        key = {id}
        className={`opacity-${opacity} ${
          opacity === "100" ? "sticky" : "absolute"
        } top-0 w-full flex-none  py-8 flex md:flex-row flex-col transition-all duration-1000 ease-in `}
      >
        <div className="md:basis-2/5 w-full  p-4  shadow-white-3 bg-gradient-to-br from-gray-box to-white rounded-lg ">
          <div className=" w-full">
            <div className="w-full rounded-lg h-60 mb-4 overflow-hidden ">
              <img
                className="w-full transition-transform duration-500 ease-in-out hover:scale-110 "
                src={image}
                alt=""
              />
            </div>
            <h1 className="tracking-wider font-medium text-red-primary text-sm mb-3">
              This world is beautiful
            </h1>
            <h1 className="font-semibold text-2xl text-stone-800 mb-2">
              {name}
            </h1>
            <h1 className="text-sm text-gray-700">{course}</h1>
          </div>
        </div>

        <div className="md:basis-3/5 w-full md:px-8 px-4">
          <div className="pt-4 mb-2">
            <div className="w-full flex  justify-between ">
              <FaQuoteRight className="text-8xl text-gray-300" />
              <div>
                <button
                  onClick={goBack}
                  className="group p-4 rounded-md m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary "
                >
                  <AiOutlineArrowLeft className="text-red-primary text-2xl font-semibold group-hover:text-white" />
                </button>
                <button
                  onClick={goNext}
                  className="group p-4 rounded-md m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary "
                >
                  <AiOutlineArrowRight className="text-red-primary text-2xl font-semibold group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full pt-10 px-8 rounded-xl shadow-white-3 bg-gradient-to-l from-body-color to-gray-box">
            <div className="flex w-full justify-between items-center mb-4">
              <div>
                <h1 className="text-3xl text-stone-800 mb-3">{course}</h1>
                <h1 className="text-md gray-600">
                  Upwork - Mar 4,2016 - Aug 30, 2021
                </h1>
              </div>
              <div className="px-2 py-3 flex  flex-wrap text-yellow-400 text-xs rounded-md m-2 shadow-white-3 bg-gradient-to-l from-body-color to-gray-box">
                <BsStarFill className="m-1" /> <BsStarFill className="m-1" />{" "}
                <BsStarFill className="m-1" /> <BsStarFill className="m-1" />{" "}
                <BsStarFill className="m-1" />
              </div>
            </div>
            <hr className="text-gray-400" />
            <div className="w-full py-4 text-lg text-stone-600">{desc}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
