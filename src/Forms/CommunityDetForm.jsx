import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData, setData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const CommunityDetForm = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const [img, setImg] = useState(Data.Community.image);
  const [info, setInfo] = useState({
    image: Data.Community.image,
    heading: Data.Community.heading,
    paragraph: Data.Community.paragraph,
    facebook: Data.Community.facebook,
    twitter: Data.Community.twitter,
    instagram: Data.Community.instagram,
    linkedin: Data.Community.linkedin,
    github: Data.Community.github,
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
      <div className="h-px bg-iceblue w-full mb-5"></div>
      <div className="mb-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 h-36 rounded-full border-8 border-body-color relative flex items-center justify-center overflow-hidden">
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
            </div>
          </div>
          <label
            htmlFor="avatarInput"
            className="my-5 text-sm font-medium inline-block cursor-pointer px-4 py-2 border border-rose-500 bg-white text-red-primary rounded-sm mt-2"
          >
            Upload
          </label>
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
        {/* <input
          type="text"
          id="Paragrapgh"
          name="paragraph"
          value={info.paragraph}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        /> */}
        <textarea
          id="Paragraph"
          rows={7}
          name="paragraph"
          value={info.paragraph}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border  outline-none border-gray-300 text-gray-900 text-sm rounded-sm  focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6 flex flex-row items-center">
        <span className="mr-3">
          <FaFacebookF className="text-red-primary group-hover:text-white text-2xl font-semibold" />
        </span>
        <input
          type="text"
          name="facebook"
          value={info.facebook}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6 flex flex-row items-center">
        <span className="mr-3">
          <GrTwitter className="text-red-primary group-hover:text-white text-2xl font-semibold" />
        </span>
        <input
          type="text"
          name="twitter"
          value={info.twitter}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6 flex flex-row items-center">
        <span className="mr-3">
          <GrInstagram className="text-red-primary group-hover:text-white text-2xl font-semibold" />
        </span>
        <input
          type="text"
          name="instagram"
          value={info.instagram}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6 flex flex-row items-center">
        <span className="mr-3">
          <FaLinkedinIn className="text-red-primary group-hover:text-white text-2xl font-semibold" />
        </span>
        <input
          type="text"
          name="linkedin"
          value={info.linkedin}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6 flex flex-row items-center">
        <span className="mr-3">
          <AiFillGithub className="text-red-primary group-hover:text-white text-2xl font-semibold" />
        </span>
        <input
          type="text"
          name="github"
          value={info.github}
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
