import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData, setData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";

const FooterForm = () => {
  const Data = useSelector(getData);
  const showSideBar = useSelector(getShow);
  const dispatch = useDispatch();
  const [img, setImg] = useState(Data.NavbarDetails.image);

  const [info, setInfo] = useState({
    paragraph: Data.Footer.paragraph,
  });

  const changeInfo = (e) => {
    setInfo({ ...info, [e.name]: e.value });
  };

  const submitData = () => {
    dispatch(
      setData({
        section: "Footer",
        data: info,
      })
    );
    sidebarCall();
  };

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(9));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold py-5">Navbar</h1>
      <div className="mb-6">
        <label
          htmlFor="Heading"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Paragraph
        </label>
        <input
          type="text"
          id="Heading"
          name="paragraph"
          value={info.paragraph}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border  outline-none border-gray-300 text-gray-900 text-sm rounded-sm  focus:border-blue-500 block w-full p-2.5"
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

export default FooterForm;
