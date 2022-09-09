import React, { useState } from "react";
import { getData, setData } from "../Redux/DataReducer";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";

const TextHighlightForm = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);

  const [info, setInfo] = useState({
    heading: Data.TextHighlight.heading,
    color: Data.TextHighlight.color,
  });

  const [color, setColor] = useColor("hex", "#d11414");
  const [showColorPalet, setShowColorPalet] = useState(false);

  const changeInfo = (e) => {
    setInfo({ ...info, [e.name]: e.value });
  };

  const submitData = () => {
    let hx = color.hex;
    let temp = { ...info, ["color"]: hx };
    setInfo({ ...info, ["color"]: hx });
    dispatch(
      setData({
        section: "TextHighlight",
        data: temp,
      })
    );
    sidebarCall();
  };

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(7));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  function toggleColorPalet() {
    setShowColorPalet(!showColorPalet);
  }

  return (
    <div>
      <h1 className="text-xl font-bold py-5">Text High Light</h1>
      <div className="h-px bg-iceblue w-full mb-5"></div>
      <div className="mb-6">
        <label
          htmlFor="Heading"
          className="block mb-2 text-sm font-medium text-gray-900 "
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
        <div
          onClick={toggleColorPalet}
          className="cursor-pointer shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white p-2 mb-4"
        >
          {color.hex}
        </div>
        {showColorPalet && (
          <div className="">
            <ColorPicker
              width={250}
              height={110}
              color={color}
              onChange={setColor}
              hideHSV
              dark
            />
          </div>
        )}
      </div>
      <button
        onClick={submitData}
        className="px-8 py-2 shadow-sm rounded-sm bg-gradient-to-tr from-red-primary to-red-solid text-white"
      >
        Done
      </button>
    </div>
  );
};

export default TextHighlightForm;
