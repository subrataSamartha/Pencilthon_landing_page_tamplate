import React, { useEffect } from "react";
import Button from "../components/Button";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";

function HeroSection() {
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     // console.log("sdfsd")
  //   }, [Data]);

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
      
      className="relative max-w-[1280px] mx-auto px-24 py-56 bg-hero-img bg-cover bg-center"
    >
      <button onClick={sidebarCall} className="absolute top-4 right-4 md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in  bg-gradient-to-br from-body-color to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white  ">Edit</button>
      <div className="max-w-[540px] flex flex-col gap-4 text-white">
        <Heading1 text={Data.Hero.heading} size="4xl" weight="bold" />
        <Paragraph text={Data.Hero.paragraph} />
        <div className="mt-2">
          <Button text="Join Community" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
