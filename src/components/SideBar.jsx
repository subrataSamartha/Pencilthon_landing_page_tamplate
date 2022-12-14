import React, { useState, useEffect } from "react";
import HeroForm from "../Forms/HeroForm";
import { useSelector } from "react-redux";
import { getShow, getFormNo } from "../Redux/SetBarReducer";
import CommunityDetForm from "../Forms/CommunityDetForm";
import ExploreGroupForm from "../Forms/ExploreGroupForm";

const SideBar = () => {
  const showSideBar = useSelector(getShow);
  const formNo = useSelector(getFormNo);
  const [ableClass, setAbleClass] = useState("opacity-1 visible left-0");
  const FormList = {
    1: HeroForm,
    2: CommunityDetForm,
    3: ExploreGroupForm,
  };
  const Form = FormList[formNo];

  useEffect(() => {
    if (showSideBar === "off") {
      //   console.log(showSideBar);
      setAbleClass("opacity-0 nonvisible -left-72");
    }
    if (showSideBar === "on") {
      setAbleClass("opacity-1 visible left-0");
    }
  }, [showSideBar]);

  return (
    <div
      className={`w-72 scrollbar  fixed  h-screen overflow-y-scroll bg-white z-50 ${ableClass}  shadow-2xl px-4  pb-4 transition-all duration-500 `}
    >
      <Form />
    </div>
  );
};

export default SideBar;
