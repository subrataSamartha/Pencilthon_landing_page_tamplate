import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData, setData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
const CommunityDetForm = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const [img, setImg] = useState(Data.Community.image);
  const [info, setInfo] = useState({
    image: Data.Community.image,
    heading: Data.Community.heading,
    paragraph: Data.Community.paragraph,
  });

  const changeInfo = (e) => {
    setInfo({ ...info, [e.name]: e.value });
  };

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImg(reader.result);
      setInfo({ ...info, image: reader.result });
    };
  }

  const submitData = () => {
    dispatch(
      setData({
        section: "Community",
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
      <h1 className="text-xl font-bold py-5">Community Details</h1>
      <div className="mb-6">
        <div className="flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border-4 border-blue-600 relative flex items-center justify-center overflow-hidden">
            <img
              className="h-36 w-36 rounded-3xl bg-cover"
              src={img}
              alt="avatar"
            />
            <div className="absolute top-11">
              <input
                onChange={captureImage}
                type="file"
                id="avatarInput"
                name="image"
                className="hidden"
              />
              <label
                htmlFor="avatarInput"
                className="my-10 inline-block cursor-pointer px-4 py-2 bg-myPrimary text-white rounded mt-2"
              >
                Upload
              </label>
            </div>
          </div>
        </div>
      </div>
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="Paragraph"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Paragraph
        </label>
        <input
          type="text"
          id="Paragrapgh"
          name="paragraph"
          value={info.paragraph}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
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

export default CommunityDetForm;
