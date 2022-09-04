import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData, setData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
const HeroForm = () => {
  const Data = useSelector(getData);
  const showSideBar = useSelector(getShow);
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    heading: Data.Hero.heading,
    paragraph: Data.Hero.paragraph,
  });

  const changeInfo = (e) => {
    setInfo({ ...info, [e.name]: e.value });
  };

  const submitData = () => {
    dispatch(
      setData({
        section: "Hero",
        data: info,
      })
    );
    sidebarCall();
  };

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(1));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold py-5">HeroSection</h1>
      <div className="mb-6">
        <label
          for = "Heading"
          className = "block mb-2 text-sm font-medium text-gray-900 "
        >
          Heading
        </label>
        <input
          type="text"
          id="Heading"
          name="heading"
          value={info.heading}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border  outline-none border-gray-300 text-gray-900 text-sm rounded-sm  focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          for="Paragraph"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Paragraph
        </label>
        <input
          type="text"
          id="Paragraph"
          name="paragraph"
          value={info.paragraph}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-sm  focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <button
        onClick={submitData}
        className="px-8 py-2 shadow-sm rounded-sm bg-gradient-to-tr from-rose-500 to-rose-700 text-white"
      >
        Done
      </button>
    </div>
  );
};

export default HeroForm;
