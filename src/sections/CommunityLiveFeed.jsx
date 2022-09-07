import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
import { useLocation } from 'react-router-dom';
function CommunityLiveFeed() {
    // get location
    const loc = useLocation();
    const url = loc.pathname;

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
      
      className={`w-full p-8 md:px-24 md:pt-24 mb-5 relative  shadow-white-3 flex flex-col md:flex-row items-center`}
    >
      {url === "/" && (
        <button
        onClick={sidebarCall}
        className="absolute top-4 right-4 group md:p-4 p-3 text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary hover:-translate-y-1  hover:text-white"
      >
          Edit
        </button>
      )}

      <div className="w-full md:w-1/2">
        <h1 className=" text-4xl text-metal-black font-bold">
          {Data.CommunityLive.heading}
        </h1>
      </div>
     
      <div className="w-full md:w-1/2 mt-12 md:mt-0">
        {/* {info.embed} */}
        <embed
          height="400px"
          width="100%"
          src="https://embed.pensil.in/group/6092210f6b4e221d682a8a72/feed/61d5f19b76ba16db0c7e7de0"
          type="text/html"
        ></embed>
      </div>
    </div>
  );
}

export default CommunityLiveFeed;
