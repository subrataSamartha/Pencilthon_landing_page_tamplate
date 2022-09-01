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
      onClick={sidebarCall}
      className="max-w-[1280px] mx-auto px-24 py-56 bg-hero-img"
    >
      <div className="max-w-[540px] flex flex-col gap-4 text-white">
        <Heading1 text={Data.Hero.heading} />
        <Paragraph text={Data.Hero.paragraph} />
        <div className="mt-2">
          <Button text="Join Community" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
