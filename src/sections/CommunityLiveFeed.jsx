import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";

function CommunityLiveFeed() {
  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);

  const [info, setInfo] = useState({
    heading: Data.CommunityLive.heading,
    color: Data.CommunityLive.color,
    embed: Data.CommunityLive.embed,
  });

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(5));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div
      style={{ backgroundColor: Data.CommunityLive.color }}
      className={`max-w-[1280px] p-8 md:p-24 mx-auto flex flex-col md:flex-row  items-center relative`}
    >
      <div className="w-full md:w-[50%]">
        <h1 className="text-white text-4xl font-bold">
          {Data.CommunityLive.heading}
        </h1>
      </div>
      <button
        onClick={sidebarCall}
        className="absolute top-4 bg-white right-4 md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white  "
      >
        Edit
      </button>
      <div className="w-full md:w-[50%] mt-12 md:mt-0">
        {/* {info.embed} */}
        {/* <embed
          height="400px"
          width="100%"
          src="https://embed.pensil.in/group/6092210f6b4e221d682a8a72/feed/61d5f19b76ba16db0c7e7de0"
          type="text/html"
        ></embed> */}
      </div>
    </div>
  );
}

export default CommunityLiveFeed;
