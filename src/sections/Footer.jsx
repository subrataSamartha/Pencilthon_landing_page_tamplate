import React from "react";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import { useLocation } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai';
const Footer = () => {
  // get location
  const loc = useLocation();
  const url = loc.pathname;

  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const dispatch = useDispatch();

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(9));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div className="w-full relative">
      {url === "/" && (
          <button
          onClick={sidebarCall}
          className="absolute top-4 right-4 group md:p-4 p-3 text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary hover:-translate-y-1  hover:text-white"
        >
         <span className={`${showSideBar === 'on'?'hidden':'inline'}`}>Edit</span> 
         <AiOutlineClose className={`text-red-primary text-2xl ${showSideBar === 'off'?'hidden':'block'}`}/>
        </button>
      )}
      <footer className="p-4 md:px-12 md:py-10 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
          {Data.Footer.paragraph}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
